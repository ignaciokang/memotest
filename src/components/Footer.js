import fotoPerfil from '../img/fotoPerfil.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

export const Footer = () => {
	return (
		<div className="footer">
			<a href="https://ignaciokang.github.io/CV/">
				<img src={fotoPerfil} alt="Ignacio Kang" />
			</a>
			<div className="nombre">
				<p>Ignacio Kang</p>
				<p>FullStack - Developer</p>
			</div>
			<div className="iconos">
				<a href="https://wa.me/541136976191">
					<IoLogoWhatsapp size={40} />
				</a>
				<a href="https://www.linkedin.com/in/ignaciokang/">
					<AiFillLinkedin size={40} />
				</a>
				<a href="https://github.com/ignaciokang/CV">
					<AiFillGithub size={40} />{' '}
				</a>
			</div>
		</div>
	);
};
