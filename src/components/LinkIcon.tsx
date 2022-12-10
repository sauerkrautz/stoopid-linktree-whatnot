import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaAddressBook,
} from "react-icons/fa";

interface props {
  socialProvider: string;
  style?: any;
}

const LinkIcon = ({ socialProvider, style }: props) => {
  switch (socialProvider) {
    case "instagram":
      return <FaInstagram style={style} />;
    case "github":
      return <FaGithub style={style} />;
    case "facebook":
      return <FaFacebook style={style} />;
    case "linkedin":
      return <FaLinkedin style={style} />;
    case "whatsapp":
      return <FaWhatsapp style={style} />;
    case "twitter":
      return <FaTwitter style={style} />;
    default:
      return <FaAddressBook style={style} />;
  }

  //   if (key === "instagram") {
  //     return (
  //       <div>
  //         <FaInstagram />
  //       </div>
  //     );
  //   } else if (key === "github") {
  //     return (
  //       <div>
  //         <FaGithub />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <FaAddressBook />
  //       </div>
  //     );
  //   }
};

export default LinkIcon;
