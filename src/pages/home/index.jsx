import React, { useState } from 'react';
import './style.css';
import Foto from '../../assets/foto.jpeg'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';


const Curriculo = () => {
  const [showDetails, setShowDetails] = useState({})

  const exibirDescricao = (index) => {
    setShowDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(1)}>Engineering Manager and Product Owner - Jul 2021 - O momento </p></div>
              {showDetails[1] && (
                <div className='experience-detail-container'>
                  <p>Responsável pela liderança de projetos na fábrica de software, realizando a gestão dos projetos, utilizando métodos ágeis, mas também faço todo o processo de comunicação com stakeholders através de acompanhamento de roadmaps, cronogramas e status report. Responsável também pela gestão de pessoas do time, realizando contratações, gestão de desempenho, PDI, 1x1s. Além disso, apoiando e direcionando o time tanto nas definições de arquitetura e implementação das soluções, quanto nos processos e práticas internas do time.</p>
                  <p>Em alguns projetos atuando também como o papel de Product Owner, responsável pelo processo de concepção e discovery dos produtos, além da gestão, priorização e escrita das histórias de usuário do backlog para desdobramento das atividades de delivery com o time.</p>
                  <p>Apoio também a área comercial no processo de pré-venda de novos projetos.</p>
                </div>
              )}

            </li>
            <li>
              <h3>Creditas</h3>
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(2)}>Engineering Manager - Jan 2020 - Nov 2020 </p></div>
              {showDetails[2] && (
                <div className='experience-detail-container'>
                  <p>Responsável pela gestão de uma das tribos da BU de Digital Banking, responsável pelas squads de Linha de Crédito (Cartão de Crédito), Plataforma de Comunicação e Financiamento de Automóveis. Contratação e desenvolvimento de lideranças dos times de engenharia de software, gestão de desempenho, PDI, 1x1, criação e acompanhamento de indicadores (OKR/KPI) da área e métricas de produtividade dos times de engenharia (práticas ágeis), arquitetura das soluções, desdobramentos de diretrizes estratégicas junto aos times, responsável pelos roadmaps dos projetos e report para os stakeholders e alta liderança.</p>
                </div>
              )}

              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(3)}>Engineering Team Lead | Squad Lead - Mai 2019 - Jan 2020 </p></div>
              {showDetails[3] && (
                <div className='experience-detail-container'>
                  <p>Responsável pela gestão das squads de Prevenção a Fraudes, Plataforma de Documentos/Contratos e Plataforma de Comunicação, squads essas que fazem parte da BU de Plataforma. Contratação e desenvolvimento de desenvolvedores dos times, gestão de desempenho, PDI, 1x1, criação e acompanhamento de indicadores (OKR/KPI) da área e métricas de produtividade dos times de engenharia (práticas ágeis), arquitetura das soluções, desdobramentos de diretrizes estratégicas junto aos times, responsável pelos roadmaps dos projetos e report para os stakeholders-chave e alta liderança.</p>
                  <p>Corresponsável pela estruturação do escritório de produto e tecnologia de Porto Alegre. Contratação dos pares do escritório como outros líderes de engenharia, Product managers e Agilistas. Apoio a área de employer branding como community manager.</p>
                </div>
              )}
            </li>
            <li>
              <h3>Agibank</h3>
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(4)}>Engineering Manager | Tribe Leader - Jan 2018 - Mar 2019 </p></div>
              {showDetails[4] && (
                <div className='experience-detail-container'>
                  <p>Realizo a gestão de pessoas dos times e orçamento da área. Responsável por realizar os desdobramentos de diretrizes estratégicas junto aos times. Apoio e acompanhamento dos roadmaps dos projetos. Apoio e acompanhamento dos agilistas na evolução das práticas ágeis dos times. Realizo também a gestão dos recursos outsourcing e gestão de entregas de softwares de fornecedores.</p>
                  <p>Responsável pelos times de desenvolvimento do CRM Salesforce (barramento de integrações responsável pela comunicação do CRM com os demais sistemas da empresa), sistema de prevenção à fraudes Risk Center - PayTrue, portal de sistemas internos (sistema com arquitetura de microfrontends responsável por conectar os demais sistemas internos em um único portal, permitindo plugar sistemas de qualquer tecnologia) e sistemas de automação de processos (BPMS Camunda).</p>
                </div>
              )}
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(5)}>Coordenador de Sistemas - Jan 2017 - Dez 2017</p></div>
              {showDetails[5] && (
                <div className='experience-detail-container'>
                  <p>Coordenação de equipe de analistas de sistemas, analistas de negócio e desenvolvedores dos sistemas de Arrecadação e Recuperação de Clientes, sistemas críticos que operam 90% das receitas do banco. Controle de cronogramas de projetos/entregas e demandas de sustentação dos sistemas. Gestão de orçamento e recursos. Controle e medição dos indicadores da área. Apoio a equipe no desdobramento de ações para atendimento das iniciativas estratégicas da empresa.</p>
                </div>
              )}
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(6)}>Especialista de Sistemas - Set 2015 - Dez 2016</p></div>
              {showDetails[6] && (
                <div className='experience-detail-container'>
                  <p>Atuação em equipe de desenvolvimento de sistemas com papel de liderança técnica, analista de sistema e analista de negócio. Atuava também com o papel de gerente de configurações dos sistemas da área, além disso, participei do projeto de desenvolvimento de um novo sistema de gestão de fontes pagadoras com o papel de analista de negócios.</p>
                </div>
              )}
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(7)}>Desenvolvedor Sênior - Nov 2012 - Set 2015</p></div>
              {showDetails[7] && (
                <div className='experience-detail-container'>
                  <p>Participei do projeto de desenvolvimento do sistema de Arrecadação (Débito em conta), participei desde a etapa de concepção solução, do processo de análise e definições dos processos, modelagem de dados, arquitetura das integrações com os sistemas legados e do desenvolvimento. A gestão do projeto é baseada em métodos ágeis – SCRUM. Depois atuei como analista responsável pela sustentação do sistema e do projeto de melhorias e novas funcionalidades. O sistema realiza integrações com as operadoras de cartão de crédito PortalCard e Conductor atualmente trabalhando com bandeira MasterCard. Atuei também na estruturação e desenvolvimento das cargas de dados para o sistema de BI- IBM Cognos. Realizei também atividades de gerenciamento de configurações e controle de versões do sistema.</p>
                </div>
              )}
            </li>
            <li>
              <h3>GX2 Tecnologia</h3>
              <p></p>
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(8)}>Desenvolvedor Sênior - Abr 2012 - Out 2012</p></div>
              {showDetails[8] && (
                <div className='experience-detail-container'>
                  <p>Atuação com desenvolvimento de soluções web (Genexus / HTML / CSS/ .Net) e soluções em bancos de dados SQL Server e ORACLE (Integrações e desenvolvimento de ETL – T-SQL e PL-SQL).</p>
                  <p>Participação em projetos baseados nos conhecimentos do PMBOK e projetos com utilização de métodos ágeis: SCRUM e Kanban.</p>
                </div>
              )}
            </li>
            <li>
              <h3>Senior Sistemas</h3>
              <p></p>
              <div className='experience-title-container'><FaChevronDown /><p className='experience-title' onClick={() => exibirDescricao(9)}>Consultor de Implantação de ERP - Jan 2005 - Abr 2012</p></div>
              {showDetails[9] && (
                <div className='experience-detail-container'>
                  <p>Responsável pelo processo de implantação dos sistemas ERP em empresas de grande porte, multinacionais e órgãos públicos.</p>
                  <p>Responsável pelo processo de migração/importação das bases de dados dos sistemas anteriores.</p>
                  <p>Participação no processo de melhoria da metodologia de implantação Senior Sistemas Filial Porto Alegre. Metodologia baseada nos princípios do PMI.</p>
                </div>
              )}
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
