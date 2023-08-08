const RichText: React.FC<{ html: string }> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default RichText
