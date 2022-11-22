import { ReactNode } from 'react'

export const Table = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <table className={`m-0 min-w-full p-0 ${className}`}>{children}</table>

export const TrHead = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <tr className={`border-b border-th-bkg-3 ${className}`}>{children}</tr>

export const Th = ({
  children,
  className,
  id,
}: {
  children?: ReactNode
  className?: string
  id?: string
}) => (
  <th
    className={`px-6 py-3 text-xs font-normal text-th-fgd-3 ${className}`}
    id={id}
    scope="col"
  >
    {children}
  </th>
)

export const TrBody = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) => (
  <tr className={`border-y border-th-bkg-3 p-2 ${className}`} onClick={onClick}>
    {children}
  </tr>
)

export const Td = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <td className={`px-6 py-3 ${className}`}>{children}</td>