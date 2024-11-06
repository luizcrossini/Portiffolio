document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const headerTitle = document.getElementById('header-title');
  const profileName = document.getElementById('profile-name');
  const profileDescription = document.getElementById('profile-description');
  const projectsTitle = document.getElementById('projects-title');
  const educationTitle = document.getElementById('education-title');
  const educationList = document.getElementById('education-list');
  const projectFilter = document.getElementById('projectFilter');
  const projectsList = document.getElementById('projects-list');

  const translations = {
    en: {
      headerTitle: 'Portfolio of Luiz Rossini',
      profileName: 'Luiz Rossini',
      profileDescription:
        'I am a web designer with a background in administration, strategic business management, and people management. Currently, I am pursuing an MBA in Full Stack Development. I have experience in strategic planning, data analysis, and web development.',
      projectsTitle: 'Developed Projects',
      projects: [
        {
          category: 'strategic-planning',
          content: 'Creation and Implementation of OKR at Somos company',
        },
        {
          category: 'strategic-planning',
          content:
            'Creation and Implementation of service flow (IVR) at Somos company ',
        },
        {
          category: 'administrative-projects',
          content:
            'Creation of reports in Excel and PowerBi for top management ',
        },
        {
          category: 'data-analysis',
          content: 'SQL course with certificate from Hashtag Trainings',
        },
        {
          category: 'data-analysis',
          content:
            'Data analysis for decision making and strategic presentations',
        },
        { category: 'web-development', content: 'Website Development ' },
        {
          category: 'web-development',
          content: 'JavaScript course with certificate from Hashtag Trainings ',
        },
        {
          category: 'web-development',
          content: 'MBA in Full Stack Development from PUC-RS ',
        },
      ],
      educationTitle: 'Education',
      educationList: [
        'Business Administration by Milton Campos College',
        'MBA in Strategic Business Management by PUC MG',
        'MBA in People Management by PUC-RS',
        'Pursuing Full Stack Development by PUC-RS',
      ],
      projectFilter: {
        all: 'All',
        strategicPlanning: 'Strategic Planning',
        administrativeProjects: 'Administrative Projects',
        dataAnalysis: 'Data Analysis',
        webDevelopment: 'Web Development',
      },
    },
    pt: {
      headerTitle: 'Portfólio de Luiz Rossini',
      profileName: 'Luiz Rossini',
      profileDescription:
        'Sou um web designer, com formação em administração, gestão estratégica de negócios e gestão de pessoas. Atualmente, estou cursando um MBA em Desenvolvimento Full Stack. Tenho experiência em planejamento estratégico, análise de dados e desenvolvimento web.',
      projectsTitle: 'Projetos Desenvolvidos',
      projects: [
        {
          category: 'strategic-planning',
          content: 'Criação e Implantação dos OKR na empresa Somos',
        },
        {
          category: 'strategic-planning',
          content:
            'Criação e Implantação de fluxo de atendimento (URA) na empresa Somos',
        },
        {
          category: 'administrative-projects',
          content:
            'Criação de relatórios em Excel e PowerBi para a alta diretoria',
        },
        {
          category: 'data-analysis',
          content: 'Curso de SQL com certificado pela Hashtag treinamentos',
        },
        {
          category: 'data-analysis',
          content:
            'Análise de dados para tomadas de decisões e apresentações estratégicas',
        },
        { category: 'web-development', content: 'Desenvolvimento de Sites' },
        {
          category: 'web-development',
          content: 'Curso Javascript com certificado pela Hashtag treinamentos',
        },
        {
          category: 'web-development',
          content: 'MBA em Desenvolvimento Full Stack pela PUC-RS',
        },
      ],
      educationTitle: 'Formação',
      educationList: [
        'Faculdade de administração pela faculdade Milton Campos',
        'MBA em gestão estratégica de negócios pela PUC MG',
        'MBA em gestão de pessoas pela PUC-RS',
        'Cursando Desenvolvimento Full Stack pela PUC-RS',
      ],
      projectFilter: {
        all: 'Todos',
        strategicPlanning: 'Planejamento Estratégico',
        administrativeProjects: 'Projetos Administrativos',
        dataAnalysis: 'Análise de Dados',
        webDevelopment: 'Desenvolvimento Web',
      },
    },
    es: {
      headerTitle: 'Portafolio de Luiz Rossini',
      profileName: 'Luiz Rossini',
      profileDescription:
        'Soy un diseñador web, con formación en administración, gestión estratégica de negocios y gestión de personas. Actualmente, estoy cursando un MBA en Desarrollo Full Stack. Tengo experiencia en planificación estratégica, análisis de datos y desarrollo web.',
      projectsTitle: 'Proyectos Desarrollados',
      projects: [
        {
          category: 'strategic-planning',
          content: 'Creación e Implementación de los OKR en la empresa Somos',
        },
        {
          category: 'strategic-planning',
          content:
            'Creación e Implementación de flujo de servicio (IVR) en la empresa Somos',
        },
        {
          category: 'administrative-projects',
          content:
            'Creación de informes en Excel y PowerBi para la alta dirección',
        },
        {
          category: 'data-analysis',
          content: 'Curso de SQL con certificado por Hashtag entrenamientos',
        },
        {
          category: 'data-analysis',
          content:
            'Análisis de datos para la toma de decisiones y presentaciones estratégicas',
        },
        { category: 'web-development', content: 'Desarrollo de Sitios Web' },
        {
          category: 'web-development',
          content:
            'Curso de JavaScript con certificado por Hashtag entrenamientos',
        },
        {
          category: 'web-development',
          content: 'MBA en Desarrollo Full Stack por PUC-RS',
        },
      ],
      educationTitle: 'Educación',
      educationList: [
        'Administración de Empresas por Milton Campos College',
        'MBA en Gestión Estratégica de Negocios por PUC MG',
        'MBA en Gestión de Personas por PUC-RS',
        'Cursando Desarrollo Full Stack por PUC-RS',
      ],
      projectFilter: {
        all: 'Todos',
        strategicPlanning: 'Planificación Estratégica',
        administrativeProjects: 'Proyectos Administrativos',
        dataAnalysis: 'Análisis de Datos',
        webDevelopment: 'Desarrollo Web',
      },
    },
  };

  function updateContent(language) {
    headerTitle.textContent = translations[language].headerTitle;
    profileName.textContent = translations[language].profileName;
    profileDescription.textContent = translations[language].profileDescription;
    projectsTitle.textContent = translations[language].projectsTitle;
    educationTitle.textContent = translations[language].educationTitle;

    // Atualizar lista de formação
    educationList.innerHTML = '';
    translations[language].educationList.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      educationList.appendChild(li);
    });

    // Atualizar lista de projetos
    projectsList.innerHTML = '';
    translations[language].projects.forEach((project) => {
      const div = document.createElement('div');
      div.className = `project-item ${project.category}`;
      div.textContent = project.content;
      projectsList.appendChild(div);
    });

    // Atualizar filtros de projetos
    projectFilter.innerHTML = '';
    const filterOptions = translations[language].projectFilter;
    Object.keys(filterOptions).forEach((key) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = filterOptions[key];
      projectFilter.appendChild(option);
    });
  }

  languageSwitcher.addEventListener('change', function () {
    const selectedLanguage = languageSwitcher.value;
    updateContent(selectedLanguage);
  });

  projectFilter.addEventListener('change', function () {
    const filterValue = projectFilter.value;
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item) => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // Defina o idioma padrão como português
  updateContent('pt');
});