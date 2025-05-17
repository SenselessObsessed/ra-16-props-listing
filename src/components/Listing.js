import Item from './Item';

function Listing({ items }) {
	return (
		<>
			<div className='item-list'>
				{items.map(item => {
					return <Item key={item.listing_id} item={item} />;
				})}
			</div>
		</>
	);
}

export default Listing;
