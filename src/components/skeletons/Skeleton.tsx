import { classNames } from '../../helpers'

type ISkeleton = {
  margin?: string | undefined
  variant?: string
  height?: number | string | undefined
  width?: number | string | undefined
  className?: string | undefined
}

const Skeleton: React.FC<ISkeleton> = ({
  margin,
  variant,
  height,
  width,
  className
}) => {
  const styleSkeleton = {
    margin: margin,
    height: height,
    width: width
  }

  return (
    <div
      className={classNames(
        'skeleton-active',
        `skeleton-${variant}`,
        className
      )}
      style={styleSkeleton}
    />
  )
}

export default Skeleton
