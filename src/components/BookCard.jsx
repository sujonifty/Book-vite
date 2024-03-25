import PropTypes from 'prop-types';

const BookCard = ({book}) => {
    const {image, tags, bookName, author,category}=book;
    return (
        <div>
            
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.string
  };
export default BookCard;