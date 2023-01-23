import React from 'react'


const Trailer = () => {
    const videos = [
      'https://www.youtube.com/embed/UaVTIH8mujA',
      'https://www.youtube.com/embed/bLvqoHBptjg',
      'https://www.youtube.com/embed/0fUCuvNlOCg',
      'https://www.youtube.com/embed/d9MyW72ELq0',
      'https://www.youtube.com/embed/_Z3QKkl1WyM'
    ];
    const phrases = [
        "A cinematic masterpiece.",
        "A powerful and emotionally charged performance.",
        "A thought-provoking and visually stunning film.",
        "A tour-de-force of acting and direction.",
        "A film that will stay with you long after the credits roll.",
        "A masterclass in storytelling.",
        "A film that pushes the boundaries of the medium.",
        "A triumph of filmmaking.",
        "A film that will be remembered for years to come.",
        "A must-see for movie lovers everywhere."
    ];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div className='Trailer' style={{textAlign: 'center'}}>
        <iframe width="560" height="315" src={randomVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                <h2>{randomPhrase}</h2>
      </div>
      </div>
    )
  }
  
  export default Trailer
  

