// DADOS_REAIS_DASHBOARD
const dataset = [
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'População Pet (Estimativa Geral)',Tipo:'Total',Metrica:'População total estimada',Valor:'150 a 160 Milhões',Fonte:'Abinpet (via Senado)'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'População Pet (Lares)',Tipo:'Total',Metrica:'População total estimada em 2020',Valor:84000000,Fonte:'Comac/Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'População Pet (Lares)',Tipo:'Cães',Metrica:'Quantidade em lares (Radar Pet 2020)',Valor:54000000,Fonte:'Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'População Pet (Lares)',Tipo:'Gatos',Metrica:'Quantidade em lares (Radar Pet 2020)',Valor:30000000,Fonte:'Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'População Pet Atual',Tipo:'Cães',Metrica:'Quantidade em lares',Valor:68000000,Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'População Pet Atual',Tipo:'Gatos',Metrica:'Quantidade em lares',Valor:34000000,Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'Crescimento Anual',Tipo:'Gatos',Metrica:'Taxa de crescimento anual',Valor:6,Unidade:'% ao ano',Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'Crescimento Anual',Tipo:'Cães',Metrica:'Taxa de crescimento anual',Valor:3.5,Unidade:'% ao ano',Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2030,Categoria:'Projeção Populacional',Tipo:'Total',Metrica:'Projeção total 2030',Valor:101000000,Fonte:'Comac/Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2030,Categoria:'Projeção Populacional',Tipo:'Gatos',Metrica:'Projeção 2030',Valor:41600000,Fonte:'FGV / Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2030,Categoria:'Projeção Populacional',Tipo:'Cães',Metrica:'Projeção 2030',Valor:70900000,Fonte:'FGV / Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Vulnerabilidade Pet',Tipo:'Cães e Gatos',Metrica:'Total em condições de vulnerabilidade',Valor:4800000,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'Vulnerabilidade Pet',Tipo:'Total',Metrica:'Pico vulnerabilidade',Valor:8800000,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (País)',Tipo:'Cães e Gatos',Metrica:'% animais em abandono',Valor:25,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (Quantidade)',Tipo:'Cães e Gatos',Metrica:'Total abandonados',Valor:30200000,Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (Ruas)',Tipo:'Cães',Metrica:'Cães nas ruas',Valor:20200000,Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (Ruas)',Tipo:'Gatos',Metrica:'Gatos nas ruas',Valor:10000000,Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Tutela ONGs (Total)',Tipo:'Total',Metrica:'Total sob tutela de ONGs',Valor:201000,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:2022,Categoria:'Tutela ONGs (Total)',Tipo:'Total',Metrica:'Total sob tutela (2022)',Valor:184960,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Tutela ONGs (Distribuição)',Tipo:'Gatos',Metrica:'% sob tutela (gatos)',Valor:92,Unidade:'%',Fonte:'IPB'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Tutela ONGs (Distribuição)',Tipo:'Cães',Metrica:'% sob tutela (cães)',Valor:8,Unidade:'%',Fonte:'IPB'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Adoção (Total)',Tipo:'Total',Metrica:'% pets adotados nos lares',Valor:80,Unidade:'%',Fonte:'GoldeN/Opinion Box (2025)'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Microchipagem',Tipo:'Cães',Metrica:'% microchipados',Valor:8,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Microchipagem',Tipo:'Gatos',Metrica:'% microchipados',Valor:10,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Castracao (Taxa)',Tipo:'Cães',Metrica:'% castrados',Valor:28,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Castracao (Taxa)',Tipo:'Gatos',Metrica:'% castrados',Valor:53,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Carência Estrutural',Tipo:'Total',Metrica:"% de municípios sem órgão específico",Valor:45,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Carência Estrutural',Tipo:'Total',Metrica:"% de municípios sem canil/gatil",Valor:76,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Carência Legislativa',Tipo:'Total',Metrica:"% sem legislação específica",Valor:62,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Gestão de Dados',Tipo:'Total',Metrica:"% sem iniciativa de censo animal",Valor:67,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'São Paulo (SEMIL)',Ano:2024,Categoria:'Castracao (Serviços)',Tipo:'Cães e Gatos',Metrica:"% municípios que oferecem serviços permanentes",Valor:62.3,Unidade:'%',Fonte:'SEMIL 2024'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'SinPatinhas registros (acumulado)',Tipo:'Total',Metrica:'Registros no SinPatinhas',Valor:620000,Fonte:'MMA / GovBR 2025'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Maus-tratos (RJ taxa 24h)',Tipo:'Total',Metrica:'Casos em 24h no RJ (média 2024)',Valor:2,Unidade:'casos/24h',Fonte:'ISP / G1'}
];

// FUNCAO_FORMATACAO_NUMERICA
function numberFmt(v) { 
    if(v == null) return '—'; 
    if(typeof v === 'number') { 
        return v >= 1000000 ? (v/1000000).toFixed(1)+'M' : v >= 1000 ? (v/1000).toFixed(1)+'k' : v; 
    } 
    return v; 
}

// FUNCAO_AGREGACAO_KPIS
function aggregateForKPIs(filtered) {
    const popRow = filtered.find(r=> r.Categoria && r.Categoria.indexOf('População Pet (Estimativa Geral)')>=0 ) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('População Pet (Estimativa Geral)')>=0 );
    const popRaw = popRow ? popRow.Valor : null;
    const popTexto = typeof popRaw === 'string' ? popRaw : null;
    const pop = typeof popRaw === 'string' ? 160000000 : popRaw;
    const vulnRow = filtered.find(r=> r.Metrica && r.Metrica.indexOf('vulnerabilidade')>=0) || filtered.find(r=> r.Categoria && r.Categoria.indexOf('Vulnerabilidade Pet')>=0);
    const vulnerable = vulnRow? vulnRow.Valor : null;
    const abandoned = (filtered.find(r=> r.Categoria && r.Categoria.indexOf('Abandono (Quantidade)')>=0) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('Abandono (Quantidade)')>=0)).Valor;
    const abandonRate = (filtered.find(r=> r.Categoria && r.Categoria.indexOf('Abandono (País)')>=0) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('Abandono (País)')>=0)).Valor;
    const tutela = (filtered.find(r=> r.Categoria && r.Categoria.indexOf('Tutela ONGs (Total)')>=0) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('Tutela ONGs (Total)')>=0)).Valor;
    const castrDogs = (dataset.find(r=> r.Metrica && r.Metrica.indexOf('% castrados')>=0 && r.Tipo==='Cães') || {}).Valor;
    const castrCats = (dataset.find(r=> r.Metrica && r.Metrica.indexOf('% castrados')>=0 && r.Tipo==='Gatos') || {}).Valor;
    const growthCats = (dataset.find(r=> r.Categoria && r.Categoria.indexOf('Crescimento Anual')>=0 && r.Tipo==='Gatos') || {}).Valor;
    const adoption = (dataset.find(r=> r.Categoria && r.Categoria.indexOf('Adoção (Total)')>=0) || {}).Valor;
    const abuseCases = (dataset.find(r=> r.Categoria && r.Categoria.indexOf('Maus-tratos (RJ taxa 24h)')>=0) || {}).Valor;
    const noShelter = (dataset.find(r=> r.Metrica && r.Metrica.indexOf('% de municípios sem canil/gatil')>=0) || {}).Valor;
    return {pop,popTexto,vulnerable,abandoned,abandonRate,tutela,castrDogs,castrCats,growthCats,adoption,abuseCases,noShelter};
}

// CONFIGURACAO_CHARTJS
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                    family: 'Inter',
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(42, 157, 143, 0.9)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#2a9d8f',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        },
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        }
    }
};

// PALETA_CORES
const colors = {
    primary: '#2a9d8f',
    secondary: '#264653',
    accent: '#e76f51',
    warning: '#e9c46a',
    light: '#e0f2f1',
    gradients: {
        primary: 'linear-gradient(135deg, #2a9d8f 0%, #1f7a73 100%)',
        secondary: 'linear-gradient(135deg, #264653 0%, #1b3b47 100%)',
        accent: 'linear-gradient(135deg, #e76f51 0%, #d65a3a 100%)'
    }
};

// INICIALIZACAO_DOM
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Chart !== 'undefined') {
        initializeCharts();
    } else {
        setTimeout(() => {
            if (typeof Chart !== 'undefined') {
                initializeCharts();
            } else {
                console.warn('Chart.js not loaded. Charts will not be displayed.');
                showChartError();
            }
        }, 1000);
    }
});

// FUNCAO_INICIALIZAR_GRAFICOS
function initializeCharts() {
    document.querySelectorAll('.chart-loading').forEach(loading => {
        loading.remove();
    });

    renderDashboard();

    createMainChart();
    createDistributionChart();
    createOngsChart();
    
    console.log('Charts initialized with REAL DASHBOARD DATA! 📊 Dataset contains', dataset.length, 'entries.');
}

// FUNCAO_RENDERIZAR_DASHBOARD
function renderDashboard() {
    const filtered = dataset;
    const agg = aggregateForKPIs(filtered);
    
    // POPULAR_KPIS
    const el_population = document.getElementById('k_population');
    const el_vulnerable = document.getElementById('k_vulnerable');
    const el_tutela = document.getElementById('k_tutela');
    const el_adoption = document.getElementById('k_adoption');
    const el_growth_cats = document.getElementById('k_growth_cats');
    const el_abandon_rate = document.getElementById('k_abandon_rate');
    const el_castration_cats = document.getElementById('k_castration_cats');
    const el_abuse_cases = document.getElementById('k_abuse_cases');
    const el_no_shelter = document.getElementById('k_no_shelter');
    
    if (el_population) el_population.textContent = agg.popTexto || numberFmt(agg.pop);
    if (el_vulnerable) el_vulnerable.textContent = numberFmt(agg.vulnerable);
    if (el_tutela) el_tutela.textContent = numberFmt(agg.tutela);
    if (el_adoption) el_adoption.textContent = (agg.adoption? agg.adoption+'%':'—');
    if (el_growth_cats) el_growth_cats.textContent = (agg.growthCats? agg.growthCats+'%':'—');
    if (el_abandon_rate) el_abandon_rate.textContent = (agg.abandonRate? agg.abandonRate+'%':'—');
    if (el_castration_cats) el_castration_cats.textContent = (agg.castrCats? agg.castrCats+'%':'—');
    if (el_abuse_cases) el_abuse_cases.textContent = (agg.abuseCases? agg.abuseCases+' casos':'—');
    if (el_no_shelter) el_no_shelter.textContent = (agg.noShelter? agg.noShelter+'%':'—');
    
    // POPULAR_INDICADORES_RAPIDOS
    const quick = document.getElementById('quickList');
    if (quick) {
        quick.innerHTML = `
            <div><strong>Microchip (C/G)(Mars Petcare):</strong>
                ${(dataset.find(d=> d.Metrica && d.Metrica.indexOf('% microchipados')>=0 && d.Tipo==='Cães') || {Valor:'—'}).Valor}% / ${(dataset.find(d=> d.Metrica && d.Metrica.indexOf('% microchipados')>=0 && d.Tipo==='Gatos') || {Valor:'—'}).Valor}%
            </div>
            <div><strong>Taxa abandono(Mars Petcare):</strong>
                ${(dataset.find(d=> d.Categoria && d.Categoria.indexOf('Abandono (País)')>=0) || {Valor:'—'}).Valor}%
            </div>
            <div><strong>Abandonados (Mars Petcare):</strong>
                ${numberFmt((dataset.find(d => d.Categoria && d.Categoria.indexOf('Abandono (Quantidade)')>=0) || {Valor:0}).Valor)}
            </div>
        `;
    }

    // POPULAR_TABELA_DADOS
    const tbody = document.querySelector('#tbl tbody');
    if (tbody) {
        tbody.innerHTML = '';
        filtered.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${r.Abrangencia}</td><td>${r.Ano}</td><td>${r.Categoria}</td><td>${r.Tipo}</td><td>${r.Metrica}</td><td>${r.Valor}</td><td>${r.Fonte||''}</td>`;
            tbody.appendChild(tr);
        });
    }

    // TEXTO_SIDEBAR_KPIS
    const kpimap = document.getElementById('kpimap');
    if (kpimap) {
        kpimap.textContent = 'KPIs utilizadas: População total; Taxas de crescimento; Proporção de vulneráveis; Taxa de abandono; Total sob tutela; Castração; Adoção; Penalidades legais; Programas governamentais (SinPatinhas, ProPatinhas).';
    }
}

// GRAFICO_PRINCIPAL_BARRAS
function createMainChart() {
    const ctx = document.getElementById('chartMain');
    if (!ctx) return;

    const filtered = dataset;
    const agg = aggregateForKPIs(filtered);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['População estimada', 'Vulneráveis', 'Abandonados'],
            datasets: [{
                label: 'Quantidade',
                data: [agg.pop, agg.vulnerable, agg.abandoned],
                backgroundColor: [colors.secondary, colors.warning, colors.accent],
                borderColor: [colors.secondary, colors.warning, colors.accent],
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'População, Vulnerabilidade e Abandono (Estimativas)',
                    font: {
                        family: 'Poppins',
                        size: 14,
                        weight: '600'
                    }
                },
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += numberFmt(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    ticks: {
                        ...chartConfig.scales.y.ticks,
                        callback: function(value) {
                            return numberFmt(value);
                        }
                    }
                }
            }
        }
    });
}

// GRAFICO_DISTRIBUICAO
function createDistributionChart() {
    const ctx = document.getElementById('chartDistribution');
    if (!ctx) return;

    const dogs = (dataset.find(r=> r.Tipo==='Cães' && r.Categoria && r.Categoria.indexOf('População Pet Atual')>=0) || {}).Valor || 0;
    const cats = (dataset.find(r=> r.Tipo==='Gatos' && r.Categoria && r.Categoria.indexOf('População Pet Atual')>=0) || {}).Valor || 0;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cães', 'Gatos'],
            datasets: [{
                data: [dogs, cats],
                backgroundColor: [colors.secondary, colors.accent],
                hoverOffset: 4
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Distribuição População Pet (2023)',
                    font: {
                        family: 'Poppins',
                        size: 14,
                        weight: '600'
                    }
                },
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1) + '%';
                            return `${label}: ${numberFmt(value)} (${percentage})`;
                        }
                    }
                }
            }
        }
    });
}

// GRAFICO_ONGS_RADAR
function createOngsChart() {
    const ctx = document.getElementById('ongsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['DF', 'GO', 'MG', 'SP', 'RJ', 'BA'],
            datasets: [{
                label: 'ONGs Parceiras',
                data: [12, 9, 15, 25, 18, 7],
                backgroundColor: 'rgba(42, 157, 143, 0.2)',
                borderColor: colors.primary,
                pointBackgroundColor: colors.primary,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: colors.primary
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Distribuição de ONGs Parceiras por Estado (Fictício)',
                    font: {
                        family: 'Poppins',
                        size: 14,
                        weight: '600'
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}

// FUNCAO_ERRO_GRAFICO
function showChartError() {
    document.querySelectorAll('.chart-container').forEach(container => {
        const canvas = container.querySelector('canvas');
        const error = document.createElement('div');
        error.className = 'chart-loading';
        error.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: ${colors.accent};
            gap: 15px;
            text-align: center;
        `;
        error.innerHTML = `
            <i class="fas fa-exclamation-triangle" style="font-size: 2rem;"></i>
            <span style="font-size: 1rem; font-weight: 600;">ERRO: Chart.js não carregado.</span>
            <small>Verifique a conexão com a internet ou o caminho do script.</small>
        `;
        
        canvas.style.display = 'none';
        container.appendChild(error);
    });
}

// ANIMACAO_SCROLL
function animateChartsOnScroll() {
    const chartsSection = document.querySelector('.charts-section');
    if (!chartsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.chart-container').forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(container);
    });
}

// INICIALIZACAO_ANIMACAO
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateChartsOnScroll, 500);
});

// RESPONSIVIDADE_GRAFICO
function handleChartResize() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
}

window.addEventListener('resize', debounce(handleChartResize, 300));

// FUNCAO_DEBOUNCE
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// EXPORT_DADOS_API
window.CarePawCharts = {
    dataset: dataset,
    aggregateForKPIs: aggregateForKPIs,
    numberFmt: numberFmt,
    config: chartConfig,
    colors: colors,
    updateChart: function(chartId, newData) {
        const chart = Chart.getChart(chartId);
        if (chart) {
            chart.data = newData;
            chart.update();
        }
    }
};

console.log('Charts module loaded with REAL DASHBOARD DATA successfully! 📈 Dataset contains', dataset.length, 'entries from official sources.');
