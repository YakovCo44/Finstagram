// src/assets/icons/InstagramIcons.jsx
export function HomeIcon({ active }) {
  return active ? (
    // Filled Home (active)
    <svg aria-label="Home" color="#000" fill="#000" height="24" width="24" role="img" viewBox="0 0 24 24">
      <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.001a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V12.573a2 2 0 0 1 .773-1.579l9-7.5a2 2 0 0 1 2.454 0l9 7.5A2 2 0 0 1 23 12.573V22a1 1 0 0 1-1 1Z"></path>
    </svg>
  ) : (
    // Outline Home
    <svg aria-label="Home" color="#262626" fill="none" height="24" width="24" role="img" viewBox="0 0 24 24">
      <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.001a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V12.573a2 2 0 0 1 .773-1.579l9-7.5a2 2 0 0 1 2.454 0l9 7.5A2 2 0 0 1 23 12.573V22a1 1 0 0 1-1 1Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
  )
}

export function SearchIcon({ active }) {
  return active ? (
    <svg aria-label="Search" color="#000" fill="#000" height="24" width="24" role="img" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" stroke="#000" strokeWidth="2" fill="none"/>
      <line x1="24" y1="24" x2="16.65" y2="16.65" stroke="#000" strokeWidth="2"/>
    </svg>
  ) : (
    <svg aria-label="Search" color="#262626" fill="none" height="24" width="24" role="img" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" stroke="#262626" strokeWidth="2" fill="none"/>
      <line x1="24" y1="24" x2="16.65" y2="16.65" stroke="#262626" strokeWidth="2"/>
    </svg>
  )
}

export function ExploreIcon({ active }) {
  return (
    <svg
      aria-label="Explore"
      fill="none"
      height="24"
      width="24"
      role="img"
      viewBox="0 0 24 24"
      style={{ display: 'block' }}
    >
      <title>Explore</title>
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polygon
        fillRule="evenodd"
        points="10.06 10.056 13.941 13.953 7.581 16.424 10.06 10.056"
        fill={active ? "currentColor" : "none"}
      />
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

export function ReelsIcon(props) {
  // Optionally pass { style, className } as props if you want!
  return (
    <svg
      viewBox="0 0 122.14 122.88"
      width={props.width || 24}
      height={props.height || 24}
      style={props.style}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Messenger"
      role="img"
    >
      <g>
        <path d="M35.14,0H87c9.65,0,18.43,3.96,24.8,10.32c6.38,6.37,10.34,15.16,10.34,24.82v52.61c0,9.64-3.96,18.42-10.32,24.79 l-0.02,0.02c-6.38,6.37-15.16,10.32-24.79,10.32H35.14c-9.66,0-18.45-3.96-24.82-10.32l-0.24-0.27C3.86,105.95,0,97.27,0,87.74 V35.14c0-9.67,3.95-18.45,10.32-24.82S25.47,0,35.14,0L35.14,0z M91.51,31.02l0.07,0.11h21.6c-0.87-5.68-3.58-10.78-7.48-14.69 C100.9,11.64,94.28,8.66,87,8.66h-8.87L91.51,31.02L91.51,31.02z M81.52,31.13L68.07,8.66H38.57l13.61,22.47H81.52L81.52,31.13z M42.11,31.13L28.95,9.39c-4.81,1.16-9.12,3.65-12.51,7.05c-3.9,3.9-6.6,9.01-7.48,14.69H42.11L42.11,31.13z M113.48,39.79H8.66 v47.96c0,7.17,2.89,13.7,7.56,18.48l0.22,0.21c4.8,4.8,11.43,7.79,18.7,7.79H87c7.28,0,13.9-2.98,18.69-7.77l0.02-0.02 c4.79-4.79,7.77-11.41,7.77-18.69V39.79L113.48,39.79z M50.95,54.95l26.83,17.45c0.43,0.28,0.82,0.64,1.13,1.08 c1.22,1.77,0.77,4.2-1,5.42L51.19,94.67c-0.67,0.55-1.53,0.88-2.48,0.88c-2.16,0-3.91-1.75-3.91-3.91V58.15h0.02 c0-0.77,0.23-1.55,0.7-2.23C46.76,54.15,49.19,53.72,50.95,54.95L50.95,54.95L50.95,54.95z"/>
      </g>
    </svg>
  )
}


export function MessagesIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 506 511.682"
      width={props.width || 24}
      height={props.height || 24}
      aria-label="Messenger"
      role="img"
      style={props.style}
      className={props.className}
      fill="currentColor"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.022 432.762c-14.224-17.624-28.477-36.009-40.468-55.504-13.738-22.329-24.838-46.442-30.326-73.172-14.057-68.387.935-136.064 36.561-190.148C77.414 59.833 133.687 19.322 202.118 5.235c68.394-14.071 136.056.928 190.14 36.547 54.105 35.632 94.638 91.912 108.71 160.35 7.003 34.067 6.445 67.452-.116 99.01-7.018 33.734-20.937 65.408-39.78 93.639-25.671 38.445-58.723 65.581-98.51 82.009-39.837 16.45-86.054 21.88-138.014 16.979l-9.714-.928c-19.966-1.928-27.528-2.653-33.487-1.094-4.343 1.181-9.932 3.69-18.842 7.677l-8.381 3.734c-20.756 9.229-36.009 10.44-47.878 6.14-15.499-5.618-22.503-17.566-25.765-33.023-1.624-7.706-2.139-15.739-2.675-24.221-.399-6.445-.841-13.231-1.784-19.292zm47.972-127.857l61.768-98.785c10.976-16.573 33.719-20.177 49.357-7.924l52.024 40.917c4.785 3.734 11.469 3.886 16.363.319l66.038-46.413c9.678-7.032 21.873 4.698 15.297 14.681l-62.355 97.785c-10.977 16.566-33.719 20.176-49.357 7.917l-52.024-40.918c-4.785-3.734-11.462-3.893-16.363-.319l-65.509 47.37c-9.671 7.032-21.872-4.64-15.239-14.63zM74.761 353.16c11.976 19.473 26.273 37.597 40.323 54.902a22.782 22.782 0 014.785 9.693c2.501 10.962 3.175 21.532 3.799 31.428.384 6.104.754 11.919 1.493 16.232 2.226-.775 5.633-2.16 10.462-4.299l8.177-3.596c11.23-5.031 18.284-8.192 25.679-10.164h.094c13.688-3.646 23.49-2.711 49.581-.188l9.716.928c44.484 4.197 83.43-.196 116.25-13.746 31.246-12.905 57.36-34.444 77.833-65.103 15.616-23.395 27.144-49.596 32.936-77.457 5.336-25.686 5.8-52.822.116-80.48-11.52-56.026-44.673-102.084-88.919-131.221-44.274-29.158-99.72-41.432-155.79-29.891-56.012 11.528-102.07 44.674-131.199 88.912-29.166 44.282-41.433 99.728-29.906 155.798 4.205 20.495 13.246 39.852 24.57 58.252z"
      />
    </svg>
  )
}

export function CreateIcon({ active, width = 24, height = 24, style, className }) {
  return active ? (
    // Filled create (active)
    <svg
      aria-label="New post"
      role="img"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="none" fill="currentColor" />
      <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    // Outline create (inactive)
    <svg
      aria-label="New post"
      role="img"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}





