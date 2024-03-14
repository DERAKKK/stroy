const features = [
	{
		imgURL: './img/Frame.png',
		title: 'Повышение эффективности',
		detail: 'Эффективные проекты стоят дешевле <br> и завершаются в срок.',
	},
	{
		imgURL: './img/Frame (6).png',
		title: 'Снижение потерь',
		detail:
			'Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и повреждений.',
	},
	{
		imgURL: './img/Frame (7).png',
		title: 'Повышение безопасности',
		detail:
			'Обеспечьте здоровье и благополучие людей, работающих на вашей площадке.',
	},
]

features.forEach(features => {
	document.querySelector('.features__blocks').innerHTML += `
        <div class="features__block">
            <div class="block__img">
                <img src="${features.imgURL}" alt="">
            </div>
            <div class="block__text">
                    <h1>${features.title}</h1>
                    <p>${features.detail}</p>
            </div>
        </div>`
})

const data = [
	{
		imgURL: './img/Rectangle (4).png',
		title: 'Отслеживайте доставку по всей цепочке поставок',
		detail:
			'От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте.',
	},
	// {
	//     imgURL: './img/Rectangle (12).png',
	//     title: 'Возьмите под контроль данные в режиме реального времени',
	//     detail: 'Интеллектуальная отчетность дает вам возможность принимать решения в зависимости от того, как обстоят дела в данный момент. Больше никаких ручных отчетов по заливке бетона или ежемесячной проверки 10.000 накладных со счетами, все это доступно онлайн без каких-либо усилий.'
	// },
]

data.forEach(data => {
	document.querySelector('.data__apeks').innerHTML += `
            <div>
                <img src="${data.imgURL}" alt="">
            </div>
            <div class="data__text">
                    <h1>${data.title}</h1>
                    <p>${data.detail}</p>
            </div>`
})

const datatwo = [
	{
		imgURL: './img/Rectangle (11).png',
		title: 'Оптимизируйте и контролируйте свое прибытие на место',
		detail:
			'Транспортные средства доставки прибывают в фиксированные промежутки времени в заранее назначенные отсеки, где разгрузочное оборудование готово и ждет их.',
	},
	// {
	//     imgURL: './img/Rectangle (12).png',
	//     title: 'Возьмите под контроль данные в режиме реального времени',
	//     detail: 'Интеллектуальная отчетность дает вам возможность принимать решения в зависимости от того, как обстоят дела в данный момент. Больше никаких ручных отчетов по заливке бетона или ежемесячной проверки 10.000 накладных со счетами, все это доступно онлайн без каких-либо усилий.'
	// },
]

datatwo.forEach(datatwo => {
	document.querySelector('.data__apeks__reverse').innerHTML += `
    <div class="data__left">
    <h1>${datatwo.title}</h1>
    <p>${datatwo.detail}</p>
    </div>
    <div>
        <img src="${datatwo.imgURL}" alt="">
    </div>`
})

const datathree = [
	{
		imgURL: './img/Rectangle (12).png',
		title: 'Возьмите под контроль данные в режиме реального времени',
		detail:
			'Интеллектуальная отчетность дает вам возможность принимать решения в зависимости от того, как обстоят дела в данный момент. Больше никаких ручных отчетов по заливке бетона или ежемесячной проверки 10.000 накладных со счетами, все это доступно онлайн без каких-либо усилий.',
	},
]

datathree.forEach(datathree => {
	document.querySelector('.data__apeks__down').innerHTML += `
            <div>
                <img src="${datathree.imgURL}" alt="">
            </div>
            <div class="data__text">
                    <h1>${datathree.title}</h1>
                    <p>${datathree.detail}</p>
            </div>`
})

const menu = [
	{
		imgURL: './img/Frame (1).png',
		title: 'Бетон',
		detail:
			'Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.',
	},
	{
		imgURL: './img/Waste removal.png',
		title: 'Утилизация отходов',
		detail:
			'Отходы контролируются и сортируются, а заполненность контейнеров отслеживается в цифровом виде.',
	},
	{
		imgURL: './img/Formwork.png',
		title: 'Опалубка',
		detail:
			'Вся опалубка отслеживается от прибытия до отправления, а ее состояние контролируется, что сводит к минимуму потери и повреждения.',
	},
]

menu.forEach(menu => {
	document.querySelector('.menu__apeks').innerHTML += `
                <div class="menu__beton">
                        <img src="${menu.imgURL}" alt="">
                    <div class="menu__text">
                        <h1>${menu.title}</h1>
                        <p>${menu.detail}</p>
                    </div>
                </div>`
})

const menutwo = [
	{
		imgURL: './img/Precasts.png',
		title: 'Сборные панели',
		detail:
			'Сборные панели прибывают по очереди, их хранение на месте отслеживается, а их установка планируется и контролируется.',
	},
	{
		imgURL: './img/Facades.png',
		title: 'Фасады',
		detail:
			'Элементы фасада поступают последовательно, их сборка контролируется, а перемещение отслеживается.',
	},
	{
		imgURL: './img/Fit-out.png',
		title: 'Отделка',
		detail:
			'Материалы поступают точно в срок, маркируются и детально отслеживаются для установки.',
	},
]

menutwo.forEach(menutwo => {
	document.querySelector('.menu__apeks').innerHTML += `
                <div class="menu__beton">
                        <img src="${menutwo.imgURL}" alt="">
                    <div class="menu__text">
                        <h1>${menutwo.title}</h1>
                        <p>${menutwo.detail}</p>
                    </div>
                </div>`
})

const menuthree = [
	{
		imgURL: './img/Scaffolding.png',
		title: 'Строительные леса',
		detail:
			'Строительные леса отслеживаются от получения до хранения, использования и возврата, поэтому всегда ясно, что на месте и где.',
	},
	{
		imgURL: './img/Frame (8).png',
		title: 'Оборудование',
		detail:
			'Оборудование и операторы гарантированно доступны в случае необходимости, а их рабочее состояние отслеживается.',
	},
	{
		imgURL: './img/MEP.png',
		title: 'Электрика и сантехника',
		detail:
			'Доставка осуществляется в точной последовательности для сложной установки, что сокращает или устраняет необходимость в хранении.',
	},
]

menuthree.forEach(menuthree => {
	document.querySelector('.menu__apeks').innerHTML += `
                <div class="menu__beton">
                        <img src="${menuthree.imgURL}" alt="">
                    <div class="menu__text">
                        <h1>${menuthree.title}</h1>
                        <p>${menuthree.detail}</p>
                    </div>
                </div>`
})

const hope = [
	{
		imgURL: './img/Frame (2).png',
		title: 'Сниженное загрязнение',
		detail:
			'При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.',
	},
	{
		imgURL: './img/Frame (3).png',
		title: 'Улучшенное управление отходами',
		detail:
			'Упрощается сортировка отходов, автоматизируется утилизация отходов, а поврежденные материалы при необходимости используются повторно, что снижает затраты и стимулирует переработку и повторное использование.',
	},
	{
		imgURL: './img/Frame (4).png',
		title: 'Улучшенное влияние на общество',
		detail:
			'Уменьшаются проблемы с дорожным движением и шумовое загрязнение, что улучшает жизнь местного сообщества. Улучшенное обращение с материалами и хранение означает, что рабочие также лучше защищены.',
	},
]

hope.forEach(hope => {
	document.querySelector('.hope__hero').innerHTML += `
                <div class="hope__data">
                        <img src="${hope.imgURL}" alt="">
                        <h1>${hope.title}</h1>
                        <p>${hope.detail}</p>
                </div>`
})

const craft = [
	{
		imgURL: './img/Frame (9).png',
		title: 'Привлечение субподрядчика',
		detail:
			'Для выполнения этой работы вам понадобятся ваши субподрядчики. У нас есть проверенный и надежный процесс для этого.',
	},
	{
		imgURL: './img/Key suppliers engaged.png',
		title: 'Привлечены ключевые поставщики',
		detail:
			'У нас уже есть ключевые поставщики, использующие программное обеспечение, что обеспечивает еще больший контроль и прозрачность информации.',
	},
	{
		imgURL: './img/100% Compliance.png',
		title: '100% соответствие',
		detail:
			'У нас есть безупречный список обеспечения соответствия требованиям, которые необходимы вам для успешного выполнения проекта с помощью СтройКонтроль.',
	},
]

craft.forEach(craft => {
	document.querySelector('.craft__blocks').innerHTML += `
                <div class="features__block">
                    <div class="block__img">
                        <img src="${craft.imgURL}" alt="">
                    </div>
                    <div class="block__hight">
                        <h1>${craft.title}</h1>
                        <p>${craft.detail}</p>
                    </div>
                </div>`
})

const job = [
	{
		imgURL: './img/Group 43.png',
		title: 'Заказать демо',
		detail:
			'Вы увидите презентацию, в которой подробно объясняется, как работает СтройКонтроль для решения задач строительной логистики в таких сложных проектах, как ваш.',
	},
	{
		imgURL: './img/Group 46.png',
		title: 'Согласование сделки',
		detail:
			'Мы обсудим ваш строительный проект и предложим реализацию СтройКонтроль, которая идеально соответствует вашим потребностям и будет иметь для вас ценность.',
	},
	{
		imgURL: './img/Group 49.png',
		title: 'Подготовка',
		detail:
			'Мы полностью обучаем вашу команду тому, как использовать систему, с помощью онлайн-видеоуроков и обеспечиваем постоянную всестороннюю поддержку.',
	},
	{
		imgURL: './img/Group 52.png',
		title: 'Внедрение и интеграция',
		detail:
			'Мы настраиваем программное обеспечение так, чтобы оно точно моделировало вашу площадку, а затем помогаем вам интегрировать его с программным обеспечением Business Intelligence для получения новых мощных аналитических данных.',
	},
]

job.forEach(job => {
	document.querySelector('.job__text').innerHTML += `
                <div class="job__fire">
                    <div class="job__number">
                        <img src="${job.imgURL}" alt="">
                    </div>
                    <div class="job__main">
                        <h1>${job.title}</h1>
                        <p>${job.detail}</p>
                    </div>
                </div>`
})

const button = [
	{
		title: 'Заказать демо',
		detail: 'Подробнее',
	},
]

button.forEach(button => {
	document.querySelector('.job__text').innerHTML += `
        <div class="job__button">
            <button>${button.title}</button>
            <button>${button.detail}</button>
        </div>`
})

const choice = [
	{
		imgURL: './img/Group.png',
		title: 'Отмеченное наградами ПО',
		detail:
			'Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями',
	},
	{
		imgURL: './img/Great potential 1.png',
		title: 'Большой потенциал',
		detail:
			'Входит в топ-25 самых многообещающих стартапов ConTech по версии Cemex Ventures, Moscow Consulting Group, BuiltWorld и PwC',
	},
	{
		imgURL: './img/Frame (10).png',
		title: 'Выбор лидеров рынка',
		detail:
			'Рекомендуемый поставщик технологий для 3 из 10 ведущих генеральных подрядчиков в Европе',
	},
	{
		imgURL: './img/Frame (11).png',
		title: 'Устойчивое развитие и безопасность',
		detail:
			'Способствует снижению выбросов CO2 и повышает безопасность на месте',
	},
]

choice.forEach(choice => {
	document.querySelector('.choice__left').innerHTML += `
            <div class="choice__fire">
                <div class="choice__img">
                    <img src="${choice.imgURL}" alt="">
                </div>
                <div class="choice__text">
                    <h1>${choice.title}</h1>
                    <p>${choice.detail}</p>
                </div>
            </div>`
})

const footer = [
	{
		head: 'Наш продукт',
		title: 'Процесс',
		detail: 'Продукция',
	},
	{
		head: 'Обслуживание',
		title: 'Клиенты',
		detail: 'Надёжность',
	},
	{
		head: 'Компания',
		title: 'О нас',
		detail: 'Связаться с нами',
	},
]

footer.forEach(footer => {
	document.querySelector('.footer__apeks').innerHTML += `
                <div class="footer__menu">
                    <h2>${footer.head}</h2>
                    <p>${footer.title}</p>
                    <p>${footer.detail}</p>
            </div>`
})
