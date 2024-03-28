import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const BookCard = ({ book }) => {
    // console.log(book)
    const {bookId, image, tags, bookName, author, category, rating } = book;
    return (
        <div>
            <NavLink to={`/bookDetails/${bookId}`}>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">

                    <figure className=" bg-slate-200">
                        <img src={image} alt="book" className="rounded-xl w-32 p-3 h-[10.5rem] bg-cover" />
                    </figure>

                    <div className="card-action space-x-3 p-5 pl-0 text-[#23BE0A] font-medium">
                        {
                            tags.map((tag, index) => <li key={index} className="badge badge-outline">{tag}</li>)
                        }

                    </div>

                    <div className="card-body p-3">
                        <h2 className="card-title playfair-display">{bookName}</h2>
                        <p className="card-title font-normal text-base">By:{author}</p>
                    </div>

                    <div className="card-body border-dotted border-2 p-5">
                        <div className='flex justify-between'>
                            <h2>{category}</h2>
                            <div className="flex justify-center items-center gap-5 ">
                                <p>{rating}</p>
                                <CiStar />
                            </div>
                        </div>
                    </div>

                </div>
            </NavLink>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
};
export default BookCard;