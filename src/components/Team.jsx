export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h1>Meet the Team</h1>
          
          <p>
            NERDS Technologies is a new generational consulting firm with over 30
            years of combined experience. We partner with leaders in business and 
            society to tackle innovative challenges and to help ensure our clients 
            have the most up-to-date technological advantages in blockchain technology,
            digital security, web development, and engineering advice for your 
            project needs.
          </p>
          <p></p>
          {/* <p>
           Our experts bring in-depth knowledge and applicable expertise in a wide 
           variety of technology development that questions the status quo and helps
           bring new ideas, new perspectives, and new solutions to help make the 
           world a better place. Maximizing our clients products and services and 
           ensuring our clients are given the best solution to their needs is our 
           top priority.
          </p> */}
        </div>
        <div id='row' className="align-items-center justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <a target="_blank" href={d.link}>{d.linkedin}</a>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
