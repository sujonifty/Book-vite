import PropTypes from 'prop-types';

const ListCard = ({ item }) => {
    const { image, tags, review, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = item;
    return (
        <div>
            

            <div className="hero min-h-screen  bg-red-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">{bookName}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <img src={image} className=" rounded-lg " />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ListCard.propTypes = {
    item: PropTypes.object
};
export default ListCard;