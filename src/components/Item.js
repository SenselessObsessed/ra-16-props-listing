import PropTypes from 'prop-types';

function Item({ item }) {
	let cost, level, imgSrc;
	if (item.MainImage) {
		imgSrc = item.MainImage.url_570xN;
	} else {
		return <></>;
	}

	if (item.currency_code === 'USD') {
		cost = `$${item.price}`;
	} else if (item.currency_code === 'EUR') {
		cost = `€${item.price}`;
	} else {
		cost = `${item.price} ${item.currency_code}`;
	}

	if (item.quantity <= 10) {
		level = 'item-quantity level-low';
	} else if (item.quantity <= 20) {
		level = 'item-quantity level-medium';
	} else {
		level = 'item-quantity level-high';
	}

	return (
		<div className='item'>
			<div className='item-image'>
				<a href={item.url}>
					<img src={imgSrc} />
				</a>
			</div>
			<div className='item-details'>
				<p className='item-title'>
					{item.title.length > 50
						? item.title.slice(0, 50) + '...'
						: item.title}
				</p>
				<p className='item-price'>{cost}</p>
				<p className={level}>{item.quantity} left</p>
			</div>
		</div>
	);
}

Item.propTypes = {
	items: PropTypes.object.isRequired,
};

export default Item;
