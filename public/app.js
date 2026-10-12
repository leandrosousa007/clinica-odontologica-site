const menuButton=document.querySelector('.menu-toggle')
const menu=document.querySelector('.site-nav')
menuButton?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open')
  menuButton.setAttribute('aria-expanded',String(open))
  menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')
})
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menu.classList.remove('open')
  menuButton?.setAttribute('aria-expanded','false')
  menuButton?.setAttribute('aria-label','Abrir menu')
}))
const screens={
  agenda:{title:'Uma agenda que mostra o dia inteiro',text:'Veja horários, profissionais e pacientes; abra atendimentos e encontre rapidamente o próximo passo.',image:'/assets/agenda-notebook.png',alt:'Captura da agenda do aplicativo com dados fictícios'},
  ficha:{title:'A história do paciente em uma só ficha',text:'Dados cadastrais, consultas, anamnese, odontograma e documentos em um espaço organizado.',image:'/assets/ficha-notebook.png',alt:'Captura da ficha do paciente com dados fictícios'},
  financeiro:{title:'Recebimentos sem perder o contexto',text:'Acompanhe cobranças, pagamentos, convênios e recibos com uma leitura simples.',image:'/assets/financeiro-notebook.png',alt:'Captura da página financeira com dados fictícios'},
  relatorios:{title:'Informação pronta para decidir',text:'Filtre a atividade da clínica e exporte relatórios em PDF, CSV ou XLSX.',image:'/assets/relatorios-notebook.png',alt:'Captura da página de relatórios com dados fictícios'},
  acompanhamento:{title:'Continue perto de cada paciente',text:'Lista de espera, retornos e aniversariantes ajudam a manter o contato no momento certo.',image:'/assets/acompanhamento-notebook.png',alt:'Captura da página de acompanhamento com dados fictícios'},
  administracao:{title:'Configurações em um lugar claro',text:'Profissionais, procedimentos, horários, backups e auditoria organizados por seção.',image:'/assets/administracao-notebook.png',alt:'Captura da página de administração com dados fictícios'}
}
const tabs=[...document.querySelectorAll('[data-screen]')]
tabs.forEach(tab=>tab.addEventListener('click',()=>{
  const item=screens[tab.dataset.screen]
  if(!item)return
  tabs.forEach(other=>{const active=other===tab;other.classList.toggle('active',active);other.setAttribute('aria-selected',String(active))})
  document.querySelector('#showcase-title').textContent=item.title
  document.querySelector('#showcase-text').textContent=item.text
  const image=document.querySelector('#showcase-image')
  image.src=item.image
  image.alt=item.alt
  document.querySelector('#showcase-image-link').href=item.image
  document.querySelector('#showcase-enlarge').href=item.image
  document.querySelector('.screen-frame').classList.toggle('compact',tab.dataset.screen==='agenda')
}))
document.querySelector('#year').textContent=String(new Date().getFullYear())
