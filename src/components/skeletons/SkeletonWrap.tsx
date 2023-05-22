import { Fragment } from 'react'
import Skeleton from './Skeleton'

type SkeletonTableProps = {
  loading: boolean
  children: JSX.Element
  variant?: string
  height?: string
  width?: string
}

const SkeletonWrap: React.FC<SkeletonTableProps> = ({
  loading,
  children,
  variant,
  height,
  width = '100%'
}) => {
  // Variants
  // - circular
  // - rectangular
  // - rounded
  // - rounded-full

  return loading ? (
    <Skeleton variant={variant} height={height} width={width} />
  ) : (
    <Fragment>{children}</Fragment>
  )
}

export default SkeletonWrap
