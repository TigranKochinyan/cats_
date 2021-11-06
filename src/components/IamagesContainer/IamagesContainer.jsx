import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getCatsImages, loadMoreImages, showLess } from '../../store/actions';

import './index.scss';

const ImagesContainer = (props) => {
    const { categoryName } = useParams();
    const [page, setPage] = useState(0)
    const categoryId = props.categorys.find(categoty => categoty.name === categoryName)?.id || ''
    useEffect(() => {
        props.getCatsImages(categoryId, page)
    }, [getCatsImages, categoryName])

    const loadMore = () => {
        props.loadMoreImages(categoryId, page + 1)
        setPage(page + 1)
    }

    const showLessImages = () => {
        props.showLess()
    }
    return (
        <div className="imagesContainer">
            <div className='imagesContainer-images'>
                {props.cats.map((cat, catIndex) => {
                    return (
                        <img loading='lazy' className='imagesContainer-images_img' key={cat.id + catIndex} src={cat.url} />
                    )
                })}
            </div>
            
            <button className='imagesContainer-button' onClick={loadMore}>load More</button>
            <button 
                disabled={props.cats.length <= 10}
                className='imagesContainer-button'
                onClick={props.cats.length > 10 ? showLessImages : null}
            >
                show Less
            </button>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
      cats: store.cats,
      categorys: store.categorys
    }
}
  
const mapDispatchToProps = {
    getCatsImages,
    loadMoreImages,
    showLess
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);