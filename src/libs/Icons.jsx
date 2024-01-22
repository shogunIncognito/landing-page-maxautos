import Image from 'next/image'
import MaxIcon from '@/assets/maxautosicon.png'

export const CarIcon = ({ width = '40px', color = 'black', ...props }) => (
  <svg fill={color} {...props} width={width} viewBox='-4 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <title>car</title> <path d='M19.938 7.188l3.563 7.156c0.063 0.094 0.094 0.219 0.125 0.313 0.219 0.563 0.375 1.344 0.375 1.844v3.406c0 1.063-0.719 1.938-1.719 2.188v2c0 0.969-0.781 1.719-1.719 1.719-0.969 0-1.719-0.75-1.719-1.719v-1.938h-13.688v1.938c0 0.969-0.75 1.719-1.719 1.719-0.938 0-1.719-0.75-1.719-1.719v-2c-1-0.25-1.719-1.125-1.719-2.188v-3.406c0-0.5 0.156-1.281 0.375-1.844 0.031-0.094 0.063-0.219 0.125-0.313l3.563-7.156c0.281-0.531 1.031-1.031 1.656-1.031h12.563c0.625 0 1.375 0.5 1.656 1.031zM5.531 9.344l-1.906 4.344c-0.094 0.156-0.094 0.344-0.094 0.469h16.938c0-0.125 0-0.313-0.094-0.469l-1.906-4.344c-0.25-0.563-1-1.063-1.594-1.063h-9.75c-0.594 0-1.344 0.5-1.594 1.063zM4.688 19.906c1 0 1.781-0.813 1.781-1.844 0-1-0.781-1.781-1.781-1.781s-1.844 0.781-1.844 1.781c0 1.031 0.844 1.844 1.844 1.844zM19.313 19.906c1 0 1.844-0.813 1.844-1.844 0-1-0.844-1.781-1.844-1.781s-1.781 0.781-1.781 1.781c0 1.031 0.781 1.844 1.781 1.844z' /> </g></svg>
)

export const MaxAutosIcon = ({ ...props }) => (
  <Image priority {...props} src={MaxIcon} alt='MaxAutos' style={{ width: 100, height: 75 }} />
)

export const LoginIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    width={40}
    fill='none'
    viewBox='0 0 24 24'
  >
    <g stroke='#1C274C' strokeWidth='1.5'>
      <circle cx='12' cy='6' r='4' />
      <path
        strokeLinecap='round'
        d='M19.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437'
      />
    </g>
  </svg>
)

export const MenuIcon = ({ color = 'none', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      stroke='#fff'
      viewBox='0 0 24 24'
      {...props}
      width={60}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

export const CloseIcon = ({ color = 'none', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      stroke='#000'
      viewBox='0 0 24 24'
      {...props}
      width={60}
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM8.97 8.97a.75.75 0 011.06 0L12 10.94l1.97-1.97a.75.75 0 011.06 1.06L13.06 12l1.97 1.97a.75.75 0 01-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 01-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 010-1.06z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const UserIcon = ({ color = 'none', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      {...props}
      width={60}
      viewBox='0 0 24 24'
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 21a7 7 0 1114 0M16 7a4 4 0 11-8 0 4 4 0 018 0z'
      />
    </svg>
  )
}

export const ExitIcon = ({ className, color = 'none', ...props }) => {
  return (
    <svg className={className} {...props} xmlns='http://www.w3.org/2000/svg' fill={color} viewBox='0 0 24 24'>
      <g fill='#fff'>
        <path
          d='M9.052 4.5C9 5.078 9 5.804 9 6.722v10.556c0 .918 0 1.644.052 2.222H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5h1.052z'
          opacity='0.5'
        />
        <path
          fillRule='evenodd'
          d='M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062zm3.043 8.545c0-.434-.336-.785-.75-.785s-.75.351-.75.784v2.094c0 .433.336.784.75.784s.75-.351.75-.784v-2.094z'
          clipRule='evenodd'
        />
      </g>
    </svg>
  )
}

export const HomeIcon = ({ className, color = 'black', ...props }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' {...props} fill={color} viewBox='0 0 24 24'>
      <path
        fill={color}
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6.5 20v-9H3l9-6 9 6h-3.5v9h-3v-3.5A1.5 1.5 0 0013 15h-2a1.5 1.5 0 00-1.5 1.5V20h-3z'
      />
    </svg>
  )
}

export const Inconventa = ({ className, width = '30px', ...props }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'>
      <path d='M704 288h131.072a32 32 0 0131.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 11-64 0v-96H384v96a32 32 0 01-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 01-31.808-35.2l57.6-576a32 32 0 0131.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 11-64 0V698.496l-73.344 73.344a32 32 0 11-45.248-45.248l128-128a32 32 0 0145.248 0l128 128a32 32 0 11-45.248 45.248z' />
    </svg>
  )
}
