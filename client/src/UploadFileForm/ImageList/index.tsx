import { FC, Key, useContext, useEffect } from 'react'
import axios from 'axios'
import * as S from './style'
import { ImageContext } from '../../Context/ImageContext'
import { ImageListWrapProps } from '../../types/images'

// backend 에서 호출시 axios 가 필요함
// 사이드 이펙트가 발생할 경우 유즈 이펙트
// 사이드 이펙트 === 함수 안에서 발생하는 게 아니라 외부적인거에 영향을 주거나 받는 경우 유즈이펙트 활용
const ImageList = () => {
  const { images, setImages } = useContext(ImageContext)
  console.log(images)
  useEffect(() => {
    axios
      .get('/images')
      .then(result => {
        setImages(result.data)
      })
      .catch(err => console.log(err))
  }, [])
  const ImageListWrap: FC<ImageListWrapProps> = () => {
    return (
      <S.ImageListBox>
        <h3>Image List</h3>
        {images &&
          images.map(el => (
            <img
              src={`http://localhost:5001/uploads/${el.key}`}
              key={el.key}
              alt={el.originalFileName}
            />
          ))}
      </S.ImageListBox>
    )
  }
  return (
    <div>
      <ImageListWrap
        key={''}
        _id={''}
        originalFileName={''}
        createdAt={''}
        updatedAt={''}
      />
    </div>
  )
}

export default ImageList
