import Link from 'next/link'

export default () => {
  return (
    <div>
      <p>Hello!</p>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </div>
  )
}
