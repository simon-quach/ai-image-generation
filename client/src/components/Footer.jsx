const Footer = () => {
  return (
    <div className="footer flex justify-center items-center text-center font-medium text-[#222328] border-t border-t-[#e6ebf4] h-20 w-[100%]">
      &copy; {new Date().getFullYear()} Simon Quach
    </div>
  )
}

export default Footer;