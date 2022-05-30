import Head from "next/head";



const Meta = (props) =>{
  const {title, keywords, description} = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="keywords" content={ keywords} />
      <meta name="description" content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: "First",
  keywords: "Hassan, Babu",
  description: "Lorem ipsum or lipsum as it is sometimes known, is dummy text used in laying out print."
}
 
export default Meta;