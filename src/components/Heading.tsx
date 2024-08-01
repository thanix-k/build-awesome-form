interface HeadingProps {
  heading :string
}

const Heading = ({heading}:HeadingProps) => {
  return (
    <h1 className=" text-4xl text-white mb-6 font-serif">{heading}</h1>
  )
}

export default Heading