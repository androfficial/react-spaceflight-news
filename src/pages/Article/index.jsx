import { useCallback, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Fail, Preloader } from '@components';
import EastIcon from '@mui/icons-material/East';

import { setIsLoaded, fetchArticle } from '@redux/actions/article';

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = useCallback(
    (e) => {
      e.preventDefault();
      navigate(-1);
    },
    [navigate]
  );

  const [fullArticle, isLoaded, errorApi] = useSelector(({ article }) => [
    article.article,
    article.isLoaded,
    article.errorApi,
  ]);

  const { imageUrl, summary, title } = fullArticle;

  // Если данные не получены и была засетана ошибка с апи запроса то отобразить компонент Fail
  const requestField = !isLoaded && errorApi && <Fail addClass='page__fail' />;

  // Если данные не получены то отобразить прелоадер
  const loading = !isLoaded && (
    <Preloader addClass='page__preloader' text='Article is loading' />
  );

  useEffect(() => {
    dispatch(fetchArticle(id));
    return () => dispatch(setIsLoaded(false));
  }, [id, dispatch]);

  return (
    <>
      {requestField || loading}
      {isLoaded && (
        <div className='page__article article'>
          <div className='article__background'>
            <img src={imageUrl} alt={title} />
          </div>
          <div className='article__info'>
            <div className='article__container _container'>
              <div className='article__wrapper'>
                <h2 className='article__title'>{title}</h2>
                <div className='article__text'>
                  <p>{summary}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates aliquid molestiae, nisi sed animi ipsum
                    asperiores modi, nostrum, laboriosam placeat iure! Ipsa est
                    nihil sed ullam consequatur tempora ea modi. Tenetur ad
                    dicta totam necessitatibus delectus accusantium error odio
                    sequi vitae quaerat, possimus eaque harum mollitia molestiae
                    ratione voluptas provident. Aut quibusdam deleniti explicabo
                    libero obcaecati in facere reprehenderit porro. Dolor odio
                    laudantium error maxime adipisci repellendus quod! Tempora
                    quos repudiandae culpa velit commodi ducimus fugit assumenda
                    ad. Aliquid aliquam laudantium molestias beatae repellendus
                    quod minima excepturi sapiente unde commodi. Quas omnis
                    cupiditate culpa enim tenetur tempore reiciendis unde?
                    Consequatur ea libero ipsam beatae odio placeat natus
                    similique exercitationem nam minus harum illum omnis in, et
                    tenetur excepturi, deleniti totam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum, necessitatibus in quidem cumque provident itaque
                    eligendi temporibus expedita, dolorum quisquam voluptas
                    tenetur incidunt corrupti aliquid dolorem dignissimos natus.
                    Doloribus, repellendus. Cupiditate, quaerat? Amet architecto
                    libero aspernatur ratione, minus blanditiis ab hic,
                    accusamus velit perspiciatis esse numquam fugiat provident?
                    Laborum illo natus culpa obcaecati voluptates illum.
                    Possimus similique totam recusandae consequuntur. Vitae
                    magni magnam, excepturi perferendis expedita optio suscipit
                    consectetur eaque ipsam laudantium. Ab aliquid odio nam,
                    maxime eveniet reiciendis dolorem reprehenderit provident
                    voluptates nisi consectetur nesciunt rerum cumque doloribus
                    pariatur!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem pariatur cum fugiat qui molestias, ducimus natus
                    quisquam dolor aspernatur vel id sapiente eligendi adipisci
                    sequi voluptates iure harum a magnam! Quas, aspernatur
                    obcaecati? Sint voluptatum reiciendis dolorem soluta eaque
                    atque. Minus nesciunt veritatis quasi esse suscipit quas,
                    ipsam similique incidunt enim totam. Dignissimos
                    exercitationem suscipit, eum sapiente minus consectetur
                    facere!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo consequuntur rem corporis, adipisci fugiat
                    nesciunt dicta! Dolores reiciendis fugit soluta corporis
                    dolor eum. Quis maiores dolor, libero provident quos ea.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='article__bottom'>
            <div className='article__container _container'>
              <div className='article__go-back'>
                <Link
                  to='/posts'
                  onClick={goBack}
                  className='article__go-back-link'
                >
                  <EastIcon
                    htmlColor='inherit'
                    sx={{
                      width: '16px',
                      height: '16px',
                      marginRight: '6px',
                    }}
                  />
                  Back to posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
