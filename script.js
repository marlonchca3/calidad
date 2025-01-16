document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const contentArea = document.getElementById('contentArea');
    const welcomeSection = document.getElementById('welcomeSection');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    

    // Manejador de navegación
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            loadSection(section);
        });
    });

    // Función para cargar secciones
    function loadSection(section) {
        welcomeSection.style.display = 'none';
        
        // Simulación de datos (en producción, estos vendrían de una API o base de datos)
        const sectionData = {
            'mi17-componentes': {
                title: 'Tiempos de Vida de Componentes - MI-17',
                content: createComponentesTable([
                    { componente: 'Motor TV3-117VM', tiempoVida: '4000 horas', ciclos: '4000', ultimaRevision: '2024-01-15' },
                    { componente: 'Rotor Principal', tiempoVida: '2000 horas', ciclos: '2000', ultimaRevision: '2024-02-20' },
                    // Añadir más componentes según sea necesario
                ])
            },
            'mi17-boletines': {
                title: 'Boletines Técnicos - MI-17',
                content: createBoletinesTable([
                    { numero: 'MI17-2024-001', fecha: '2024-01-10', descripcion: 'Inspección de palas del rotor principal' },
                    { numero: 'MI17-2024-002', fecha: '2024-02-15', descripcion: 'Actualización del sistema hidráulico' },
                    // Añadir más boletines según sea necesario
                ])
            },
            // Añadir más secciones según sea necesario
        };

        const sectionInfo = sectionData[section] || {
            title: 'Sección en Desarrollo',
            content: '<p>Esta sección está actualmente en desarrollo.</p>'
        };

        contentArea.innerHTML = `
            <h2>${sectionInfo.title}</h2>
            <div class="section-content">
                ${sectionInfo.content}
            </div>
        `;
    }

    // Funciones auxiliares para crear tablas
    function createComponentesTable(data) {
        return `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Componente</th>
                        <th>Tiempo de Vida</th>
                        <th>Ciclos</th>
                        <th>Última Revisión</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(item => `
                        <tr>
                            <td>${item.componente}</td>
                            <td>${item.tiempoVida}</td>
                            <td>${item.ciclos}</td>
                            <td>${item.ultimaRevision}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    function createBoletinesTable(data) {
        return `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Fecha</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(item => `
                        <tr>
                            <td>${item.numero}</td>
                            <td>${item.fecha}</td>
                            <td>${item.descripcion}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    // Añadir estilos dinámicos para las tablas
    const style = document.createElement('style');
    style.textContent = `
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .data-table th,
        .data-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .data-table th {
            background-color: var(--primary-color);
            color: white;
        }

        .data-table tr:hover {
            background-color: #f5f5f5;
        }

        .section-content {
            margin-top: 2rem;
        }
    `;
    document.head.appendChild(style);
});