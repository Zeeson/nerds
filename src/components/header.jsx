import BackgroundSlider from 'react-background-slider'
const image1 = "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1634815144/nasa-Q1p7bh3SHj8-unsplash_r2xlx0.jpg"
const image2 = "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1634815120/sahand-babali-gavODTHG36Y-unsplash_sbz2tq.jpg"
const image3 = "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1634811801/nerdsHero_lvsnys.jpg"

export const Header = (props) => {
  return (
    <header id='header'>
      {/* <BackgroundSlider images={[image1, image2, image3]} duration={10} transition={2} /> */}
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <p>
                  {props.data ? props.data.name : 'Loading'}
                  <span></span>
                </p>
                <h2>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
