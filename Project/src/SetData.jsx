import {useEffect} from "react";

export default function SetData() {
    const friends = [
        {id: 1, name: "Сидорова Ольга Игоревна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg"},
        {id: 2, name: "Кузнецов Михаил Александрович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg"},
        {id: 3, name: "Попова Анастасия Дмитриевна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/7.jpg"},
        {id: 4, name: "Иванов Дмитрий Сергеевич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg"},
        {id: 5, name: "Смирнова Екатерина Олеговна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"},
        {id: 6, name: "Козлов Антон Викторович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/9.jpg"},
        {id: 7, name: "Лебедев Иван Петрович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg"},
        {id: 8, name: "Петрова Анна Владимировна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg"},
        {id: 9, name: "Новиков Евгений Алексеевич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg"},
        {id: 10, name: "Сидоров Артем Игоревич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"},
        {id: 11, name: "Кузнецова Мария Александровна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"},
        {id: 12, name: "Лебедева Юлия Петровна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/8.jpg"},
        {id: 13, name: "Попов Сергей Дмитриевич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg"},
        {id: 14, name: "Смирнов Павел Олегович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg"},
        {id: 15, name: "Васильев Андрей Николаевич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"},
        {id: 16, name: "Новикова Светлана Алексеевна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/10.jpg"},
        {id: 17, name: "Козлова Татьяна Викторовна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/9.jpg"},
        {id: 18, name: "Иванова Елена Сергеевна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg"},
        {id: 19, name: "Петров Алексей Владимирович", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg"},
        {id: 20, name: "Васильева Наталья Николаевна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/6.jpg"},
    ]

    const requests = [
        {id: 21, name: "Громова Алиса Максимовна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/11.jpg"},
        {id: 22, name: "Орлов Денис Станиславович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/12.jpg"},
        {id: 23, name: "Зайцева Вероника Артемовна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/13.jpg"},
        {id: 24, name: "Белов Артур Романович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/14.jpg"},
        {id: 25, name: "Морозова Диана Кирилловна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/15.jpg"},
        {id: 26, name: "Крылов Глеб Андреевич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg"},
        {id: 27, name: "Тихонова Полина Егоровна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/17.jpg"},
        {id: 28, name: "Федоров Марк Тимофеевич", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/18.jpg"},
        {id: 29, name: "Соколова Милана Данииловна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/19.jpg"},
        {id: 30, name: "Волков Ярослав Львович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/20.jpg"},
        {id: 31, name: "Павлова София Марковна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/21.jpg"},
        {id: 32, name: "Комаров Владислав Артурович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg"},
        {id: 33, name: "Михайлова Арина Георгиевна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg"},
        {id: 34, name: "Никитин Александр Денисович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/24.jpg"},
        {id: 35, name: "Егорова Валерия Ильинична", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/25.jpg"},
        {id: 36, name: "Семенов Тимофей Вадимович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/26.jpg"},
        {id: 37, name: "Ковалева Ульяна Федоровна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/27.jpg"},
        {id: 38, name: "Гусев Даниил Егорович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/28.jpg"},
        {id: 39, name: "Медведева Алиса Мироновна", photoPath: "https://xsgames.co/randomusers/assets/avatars/female/29.jpg"},
        {id: 40, name: "Родионов Максим Ярославович", photoPath: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg"},
    ]

    const users = [
        {id:1,birthDate:"1985-03-15",address:"г. Москва, ул. Ленина, д. 10, кв. 25",group:"Специалист",description:"Кардиолог высшей категории с 15-летним стажем. Специализируется на лечении ишемической болезни сердца, проводит сложные операции по стентированию коронарных артерий. Автор 20 научных публикаций в международных медицинских журналах."},
        {id:2,birthDate:"1990-07-22",address:"г. Санкт-Петербург, ул. Пушкина, д. 5, кв. 12",group:"Специалист",description:"Врач-терапевт, высшая категория"},
        {id:3,birthDate:"2005-11-30",address:"г. Екатеринбург, пр. Космонавтов, д. 42",group:"Производитель",description:"Производство промышленного оборудования"},
        {id:4,birthDate:"1988-07-18",address:"г. Казань, ул. Баумана, д. 30, кв. 5",group:"Специалист",description:"Детский хирург с узкой специализацией в торакальной хирургии. Провел более 500 операций на органах грудной клетки у детей. Разработал минимально инвазивные методики для оперативного лечения врожденных пороков развития."},
        {id:5,birthDate:"2010-01-15",address:"г. Екатеринбург, ул. Мамина-Сибиряка, д. 145",group:"Общественная организация",description:"Благотворительный фонд помощи детям с онкологическими заболеваниями. Организует сбор средств на лечение, обеспечивает психологическую поддержку семьям. Ежегодно помогает более 200 детям получить высокотехнологичное лечение."},
        {id:6,birthDate:"1983-09-05",address:"г. Владивосток, ул. Светланская, д. 22, кв. 9",group:"Специалист",description:"Эндокринолог, специалист по диабетологии. Руководит региональным центром эндокринологии. Внедрила систему непрерывного мониторинга глюкозы для пациентов с сахарным диабетом 1 типа, что снизило количество осложнений на 40%."},
        {id:7,birthDate:"2008-06-20",address:"г. Краснодар, ул. Красная, д. 100",group:"Организация",description:"Клинико-диагностический центр, оснащенный МРТ 3 Тесла, КТ 128 срезов и другим современным оборудованием. Проводит более 50 видов инструментальных и лабораторных исследований. Аккредитован по международным стандартам качества."},
        {id:8,birthDate:"1979-12-14",address:"г. Сочи, ул. Навагинская, д. 7, кв. 3",group:"Специалист",description:"Онколог-маммолог с мировым именем. Разработал инновационные протоколы органосохраняющего лечения рака молочной железы. Член Европейского общества онкологов, регулярно проводит мастер-классы по всему миру."},
        {id:9,birthDate:"2005-04-03",address:"г. Ростов-на-Дону, пр. Стачки, д. 50",group:"Производитель",description:"Производитель медицинского оборудования для кардиохирургии. Выпускает аппараты искусственного кровообращения и системы для малоинвазивных вмешательств. Продукция сертифицирована в РФ, ЕС и США."},
        {id:10,birthDate:"1986-08-25",address:"г. Уфа, ул. Ленина, д. 33, кв. 11",group:"Специалист",description:"Реаниматолог-анестезиолог с опытом работы в зонах военных конфликтов. Специализируется на оказании экстренной медицинской помощи в полевых условиях. Разработал мобильный комплекс для экстренной реанимации."},
        {id:11,birthDate:"2012-10-10",address:"г. Пермь, ул. Сибирская, д. 80",group:"Общественная организация",description:"Ассоциация врачей скорой медицинской помощи. Занимается повышением квалификации сотрудников СМП, разработкой стандартов оказания экстренной помощи, защитой прав медицинских работников."},
        {id:12,birthDate:"1981-02-28",address:"г. Воронеж, ул. Плехановская, д. 18, кв. 6",group:"Специалист",description:"Гериатр с уникальной методикой комплексного ведения пациентов старше 80 лет. Создала систему 'Школы активного долголетия', которая внедрена в 15 регионах России. Эксперт Минздрава по вопросам гериатрии."},
        {id:13,birthDate:"2003-07-07",address:"г. Тюмень, ул. Республики, д. 150",group:"Организация",description:"Федеральный центр травматологии и ортопедии, оснащенный роботизированными системами для эндопротезирования. Ежегодно выполняет более 3000 сложных операций. Ведущий центр по реабилитации после спортивных травм."},
        {id:14,birthDate:"1977-04-17",address:"г. Иркутск, ул. Карла Маркса, д. 25, кв. 8",group:"Специалист",description:"Инфекционист, руководитель центра по борьбе с особо опасными инфекциями. Участвовала в ликвидации вспышек Эболы в Африке. Разработала протоколы биологической безопасности для медучреждений."},
        {id:15,birthDate:"2009-09-01",address:"г. Хабаровск, ул. Муравьева-Амурского, д. 35",group:"Производитель",description:"Биотехнологическая компания, специализирующаяся на производстве вакцин. Разработала первую российскую мРНК-вакцину. Имеет собственный научно-исследовательский центр с лабораторией уровня BSL-3."},
        {id:16,birthDate:"1984-11-09",address:"г. Калининград, ул. Леонова, д. 10, кв. 4",group:"Специалист",description:"Психиатр-нарколог, создатель авторской программы реабилитации пациентов с химическими зависимостями. Внедрил систему анонимного консультирования, что увеличило обращаемость за помощью на 70%."},
        {id:17,birthDate:"2006-12-24",address:"г. Томск, пр. Ленина, д. 88",group:"Организация",description:"Центр ядерной медицины с циклотроном для производства радиофармпрепаратов. Проводит ПЭТ-КТ исследования, радионуклидную терапию. Единственный центр в Сибири, выполняющий лечение метастатического рака лютецием-177."},
        {id:18,birthDate:"1989-06-30",address:"г. Омск, ул. Чкалова, д. 12, кв. 15",group:"Специалист",description:"Неонатолог, руководитель отделения реанимации новорожденных. Внедрила методику гипотермии для детей с перинатальным поражением ЦНС, что снизило инвалидизацию на 35%. Эксперт ВОЗ по вопросам выхаживания недоношенных."},
        {id:19,birthDate:"2001-03-08",address:"г. Челябинск, ул. Воровского, д. 64",group:"Производитель",description:"Производитель индивидуальных ортезов и протезов с использованием 3D-печати. Разработала уникальные биосовместимые материалы. Обеспечивает реабилитационными изделиями пациентов по всей России."},
        {id:20,birthDate:"2015-05-22",address:"г. Самара, ул. Галактионовская, д. 120",group:"Общественная организация",description:"Ассоциация родителей детей-инвалидов. Оказывает юридическую и психологическую поддержку семьям, организует инклюзивные мероприятия, лоббирует изменения в законодательстве для улучшения качества жизни особых детей."},
        {id:21,birthDate:"1982-04-11",address:"г. Москва, ул. Академика Челомея, д. 8, кв. 14",group:"Специалист",description:"Гастроэнтеролог, эксперт по лечению воспалительных заболеваний кишечника. Внедрил методику капсульной эндоскопии для диагностики болезней тонкого кишечника. Руководит научной группой по изучению микробиоты."},
        {id:22,birthDate:"2007-08-19",address:"г. Новосибирск, ул. Тимирязева, д. 71",group:"Производитель",description:"Производитель стерилизационного оборудования для медучреждений. Выпускает автоклавы последнего поколения с RFID-контролем обработки инструментов. Продукция соответствует стандартам ЕС и FDA."},
        {id:23,birthDate:"1991-01-30",address:"г. Казань, ул. Вишневского, д. 24, кв. 9",group:"Специалист",description:"Аллерголог-иммунолог, разработавшая персонализированные схемы АСИТ-терапии. Создала мобильное приложение для пациентов с поллинозом, предупреждающее о периоды высокой концентрации аллергенов."},
        {id:24,birthDate:"2016-12-05",address:"г. Екатеринбург, ул. Хохрякова, д. 55",group:"Общественная организация",description:"Фонд помощи медицинским работникам с постковидным синдромом. Организует бесплатные программы реабилитации, включая психологическую поддержку и физиотерапию. За 2 года помог 500+ медикам."},
        {id:25,birthDate:"1987-07-22",address:"г. Владивосток, ул. Фокина, д. 18, кв. 3",group:"Специалист",description:"Сосудистый хирург, выполняющий уникальные операции при аневризмах аорты. Первым в России применил гибридные технологии эндопротезирования. Обладатель премии «Золотой скальпель»."},
        {id:26,birthDate:"2004-02-14",address:"г. Краснодар, ул. Ставропольская, д. 210",group:"Организация",description:"Центр репродуктивного здоровья с собственным банком донорских материалов. Проводит до 1000 процедур ЭКО ежегодно. Пионер в применении технологии криоконсервации ооцитов в регионе."},
        {id:27,birthDate:"1978-10-08",address:"г. Сочи, ул. Донская, д. 32, кв. 7",group:"Специалист",description:"Офтальмолог, специалист по лечению возрастной макулярной дегенерации. Внедрил интравитреальные инъекции анти-VEGF препаратов. Разработал программу скрининга диабетической ретинопатии."},
        {id:28,birthDate:"2011-09-17",address:"г. Ростов-на-Дону, пер. Соборный, д. 3",group:"Производитель",description:"Компания по производству бионических протезов с нейроинтерфейсом. Разработала первую российскую модель протеза руки с тактильной обратной связью. Победитель конкурса «Сколково»."},
        {id:29,birthDate:"1993-06-25",address:"г. Уфа, ул. Революционная, д. 45, кв. 11",group:"Специалист",description:"Гематолог, руководитель центра лечения редких заболеваний крови. Внедрил генную терапию для пациентов с гемофилией. Член международного совета по исследованиям в гематологии."},
        {id:30,birthDate:"2018-03-03",address:"г. Пермь, ул. Петропавловская, д. 90",group:"Общественная организация",description:"Ассоциация доноров костного мозга. Организовала национальный регистр доноров, увеличив его до 150 000 человек. Проводит акции по типированию потенциальных доноров по всей России."},
        {id:31,birthDate:"1985-11-19",address:"г. Воронеж, ул. Кольцовская, д. 55, кв. 6",group:"Специалист",description:"Пульмонолог, эксперт по интерстициальным заболеваниям легких. Разработала программу реабилитации после COVID-19, принятую как региональный стандарт. Автор методики оценки фиброза легких по КТ."},
        {id:32,birthDate:"2002-04-07",address:"г. Тюмень, ул. Мельникайте, д. 120",group:"Организация",description:"Центр протонной терапии для лечения онкозаболеваний. Единственный в Уральском регионе, оснащенный синхротроном. Проводит до 30 сеансов облучения в день с точностью до 0.5 мм."},
        {id:33,birthDate:"1976-08-12",address:"г. Иркутск, ул. Декабрьских Событий, д. 77, кв. 4",group:"Специалист",description:"Стоматолог-имплантолог, разработавший методику немедленной нагрузки при полной адентии. Создал линейку титановых имплантов с нанопокрытием, ускоряющим остеоинтеграцию на 30%."},
        {id:34,birthDate:"2013-05-28",address:"г. Хабаровск, ул. Запарина, д. 85",group:"Производитель",description:"Производитель медицинских роботов для хирургии. Выпускает роботизированные системы для урологических и гинекологических операций. Партнер ведущих медицинских университетов."},
        {id:35,birthDate:"1990-12-01",address:"г. Калининград, ул. Горького, д. 20, кв. 8",group:"Специалист",description:"Ревматолог, специалист по биологической терапии аутоиммунных заболеваний. Внедрила протоколы прецизионной медицины для подбора терапии. Руководитель регистра пациентов с ревматоидным артритом."},
        {id:36,birthDate:"2008-07-15",address:"г. Томск, ул. Беленца, д. 11",group:"Организация",description:"Центр геномных исследований. Проводит полное секвенирование генома для диагностики наследственных заболеваний. Разработал панели для скрининга 5000 генетических мутаций."},
        {id:37,birthDate:"1983-02-09",address:"г. Омск, ул. Масленникова, д. 66, кв. 13",group:"Специалист",description:"Нефролог, руководитель отделения диализа. Организовала мобильные бригады для помощи пациентам в отдаленных районах. Внедрила систему телемедицинского контроля за больными на домашнем диализе."},
        {id:38,birthDate:"2014-10-22",address:"г. Челябинск, ул. Воровского, д. 64",group:"Производитель",description:"Производитель экзоскелетов для реабилитации пациентов с травмами позвоночника. Разработал детские модели с регулируемым размером. Продукция используется в 20 реабилитационных центрах страны."},
        {id:39,birthDate:"1995-01-05",address:"г. Самара, ул. Ново-Садовая, д. 180, кв. 10",group:"Специалист",description:"Онколог-радиолог, специалист по брахитерапии. Разработала алгоритмы дозиметрии для лечения рака предстательной железы. Член Европейского общества радиационной онкологии (ESTRO)."},
        {id:40,birthDate:"2019-06-18",address:"г. Саратов, ул. Московская, д. 150",group:"Общественная организация",description:"Ассоциация паллиативной помощи. Обучает родственников уходу за тяжелобольными, предоставляет оборудование напрокат. Организовала первую в регионе выездную службу паллиативной помощи."}
    ]

    const photos = [
        { path: "https://images.unsplash.com/photo-1588472235276-7638965471e2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    const videos = [
        { path: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { path: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    const posts = [
        {
            labelPath: "Реабилитация после травм позвоночника",
            photoPath: "https://images.unsplash.com/photo-1593612605566-fc2e271cb68f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textPath: "Наша клиника специализируется на комплексной реабилитации после травм позвоночника различной степени тяжести..."
        },
        {
            labelPath: "Спортивная реабилитация",
            photoPath: "https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textPath: "Для профессиональных спортсменов мы разрабатываем индивидуальные программы реабилитации..."
        },
        {
            labelPath: "Детская реабилитация",
            photoPath: "https://plus.unsplash.com/premium_photo-1664355810282-b3fc6a06eef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textPath: "Реабилитация детей - это особое направление нашей работы, требующее не только медицинских знаний..."
        },
        {
            labelPath: "Посттравматическая реабилитация",
            photoPath: "https://plus.unsplash.com/premium_photo-1661603721001-68b92c9dfea1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textPath: "После серьезных травм и операций важно не только восстановить функции организма..."
        },
        {
            labelPath: "Неврологическая реабилитация",
            photoPath: "https://images.unsplash.com/photo-1669722001296-0d5fb054986b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textPath: "Реабилитация после инсультов, черепно-мозговых травм и при нейродегенеративных заболеваниях..."
        },
        {
            labelPath: "Реабилитация при артрозах",
            photoPath: "https://plus.unsplash.com/premium_photo-1678743317054-ce02cd421c5b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textPath: "Дегенеративные заболевания суставов требуют особого подхода в реабилитации..."
        }
    ];

    const profile = {
        name: "Иванов Виктор Сергеевич",
        description: "Врач-реабилитолог высшей категории, кандидат медицинских наук, специалист по восстановительной медицине и спортивной реабилитации",
        address: "Россия, Москва",
        birthDate: "15 марта 1985",
        group: "Реабилитолог",
        photoPath: "https://xsgames.co/randomusers/assets/avatars/male/38.jpg"
    };

    useEffect(() => {
        sessionStorage.setItem('friends', JSON.stringify(friends))
        sessionStorage.setItem('requests', JSON.stringify(requests))
        sessionStorage.setItem('photos', JSON.stringify(photos))
        sessionStorage.setItem('videos', JSON.stringify(videos))
        sessionStorage.setItem('posts', JSON.stringify(posts))
        sessionStorage.setItem('profile', JSON.stringify(profile))
        sessionStorage.setItem('users', JSON.stringify(users))
    })
}