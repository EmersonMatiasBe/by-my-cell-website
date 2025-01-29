import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import Loading from '../icons/loading'

type ButtonProps = ComponentProps<'button'> & {
  loading?: boolean
  loadingLabel?: string
  loadingPosition?: 'right' | 'left'
  loadingColor?: string
}
//Fazer transition no hover
export default function Button({
  className,
  children,
  loading,
  loadingPosition = 'right',
  loadingLabel,
  loadingColor = '#FFFFFF',
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || props.disabled}
      {...props}
      className={twMerge(
        'cursor-pointer flex gap-2 items-center justify-center hover:brightness-[0.85] bg disabled:brightness-50 disabled:cursor-default transition-all duration-500',
        className
      )}
    >
      {loading && loadingPosition === 'left' && (
        <Loading className="w-auto h-8" stopColor={loadingColor} />
      )}
      {!loading && children}
      {loading && loadingLabel && loadingLabel}
      {loading && !loadingLabel && children}
      {loading && loadingPosition === 'right' && (
        <Loading className="w-auto h-8" stopColor={loadingColor} />
      )}
    </button>
  )
}
