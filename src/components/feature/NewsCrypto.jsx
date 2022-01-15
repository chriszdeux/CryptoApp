import React, { useContext } from 'react'
import { DataContext } from '../../context/context';
import { animations_object } from '../../utils/animations/animations_object'
import { MoreNews } from '../cards/MoreNews';
import { NewsCard } from '../cards/NewsCard'
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const NewsCrypto = () => {
  const { dataNews:{
    loading, error, data
  } } = useContext(DataContext);
  const { intro } = animations_object;
  // debugger
  return (
    <div className={`wrapper c100 ${ intro }`} style={{ animationDelay: '1.3s' }}>
      <h2 className="wrapper--title">News on Crypto</h2>
      <div className="wrapper__cards w--h c100">
        {
          loading
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              :
                data.slice(0,5).map(item => (
                  <NewsCard key={ item.article_title } item={ item } />
                ))
        }
        <MoreNews />
      </div>
    </div>
  )
}
