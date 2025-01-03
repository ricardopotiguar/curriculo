import React from 'react';
import './style.css';
import Foto from '../../assets/foto.jpeg'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Curriculo = () => {
  return (
    <div className="curriculo-container">
      {/* Left Section */}
      <div className="left-section">
        <img 
          src={Foto}
          alt="Minha Foto" 
          className="profile-photo" 
        />
        <div className="contact-section">
          <h3>Contato</h3>
          <div className="contact-section-p"> <FaPhoneAlt /> <span>+55 51 98417-0991</span></div>
          <div className="contact-section-p"> <FaEnvelope /> <span>ricardopotiguar@gmail.com</span></div>
          <div className="contact-section-p"><FaLinkedin /> <span> <a href='https://www.linkedin.com/in/ricardopotiguar' target="_blank" rel="noopener noreferrer">linkedin/ricardopotiguar</a></span></div>
          <div className="contact-section-p"><FaGithub /> <span><a href='https://github.com/ricardopotiguar' target="_blank" rel="noopener noreferrer">github/ricardopotiguar</a></span></div>
        </div>
        <div className="skills-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Liderança</li>
            <li>Gestão de Pessoas</li>
            <li>Inteligência Emocional</li>
            <li>Comprometimento</li>
            <li>Pontualidade</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Hard Skills</h3>
          <ul>
            <li>Gestão de Processos</li>
            <li>Métodos Ágeis</li>
            <li>Desenvolvimento de Software Frontend</li>
            <li>Desenvolvimento de Software Backend</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>T-SQL / PL-SQL</li>
            <li>Bancos de dados Relacionais</li>
            <li>Arquiteturas de Software</li>
            <li>Containers / Docker</li>
          </ul>
        </div>
        <div className="languages-section">
          <h3>Idiomas</h3>
          <ul>
            <li>Português - Nativo</li>
            <li>Inglês - Intermediário</li>
            <li>Espanhol - Básico</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="presentation-section">
          <h1>Ricardo Potiguar Silveira da Silva</h1>
          <p>Com mais de 18 anos de experiência na área de tecnologia da informação, sou um entusiasta de novas tecnologias, IA Generativa, inovação e transformação digital. Minha abordagem de gestão é centrada em propósito e no empoderamento das pessoas, buscando sempre alavancar o potencial humano para alcançar os resultados esperados.</p>
          <p>Tenho uma sólida trajetória no desenvolvimento de sistemas e produtos digitais, com ampla experiência em liderar times de alta performance. Minha expertise em transformação ágil me permite unir áreas de negócios e tecnologia em equipes coesas com um propósito comum.</p>
          <p>Sou orientado a resultados, equilibrando sempre o desempenho com o cuidado e desenvolvimento das pessoas. Tenho facilidade em aprender sobre novos negócios e me adapto rapidamente a diferentes cenários e desafios.</p>
          <p>Estou sempre em busca de oportunidades para aplicar meu conhecimento, paixão por tecnologia e gestão, contribuindo para o sucesso e crescimento das organizações em que atuo.</p>
        </div>
        <div className="experience-section">
          <h2>Experiências Profissionais</h2>
          <ul>
            <li>
              <h3>GX2 Tecnologia</h3>
              <p>Engineering Manager and Product Owner - Jul 2021 - O momento</p>
            </li>
            <li>
              <h3>Creditas</h3>
              <p>Engineering Manager - Jan 2020 - Nov 2020</p>
              <p>Engineering Team Lead | Squad Lead - Mai 2019 - Jan 2020</p>
            </li>
            <li>
              <h3>Agibank</h3>
              <p>Engineering Manager | Tribe Leader - Jan 2018 - Mar 2019</p>
              <p>Coordenador de Sistemas - Jan 2017 - Dez 2017</p>
              <p>Especialista de Sistemas - Set 2015 - Dez 2016</p>
              <p>Desenvolvedor Sênior - Nov 2012 - Set 2015</p>
            </li>
            <li>
              <h3>GX2 Tecnologia</h3>
              <p>Desenvolvedor Sênior - Abr 2012 - Out 2012</p>
            </li>
            <li>
              <h3>Senior Sistemas</h3>
              <p>Consultor de Implantação de ERP - Jan 2005 - Abr 2012</p>
            </li>
          </ul>
        </div>
        <div className="education-section">
          <h2>Formação Acadêmica</h2>
          <ul>
            <li>
              <h3>IBGEN - Instituto Brasileiro de Gestão de Negócios</h3>
              <p>Tecnólogo, Gestão Financeira - 2010 - 2012</p>
            </li>
            <li>
              <h3>Unisinos - Universidade do Vale do Rio do Sinos</h3>
              <p>Graduação, Sistemas de Informação - 2007 - 2010</p>
            </li>
            <li>
              <h3>Escola Técnica - QI Informática</h3>
              <p>Curso Técnico de Informática - 2004 - 2005</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Curriculo;
