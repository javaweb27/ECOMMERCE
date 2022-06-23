interface I_Props {
  children: any
}

const ContentContainer = ({ children }: I_Props) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default ContentContainer