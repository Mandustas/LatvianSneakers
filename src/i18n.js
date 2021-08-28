import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            "Menu": {
                "Home": "HOME",
                "Delivery": "SHIPPING",
                "Rules": "RULES",
                "Reviews": "REVIEWS",
                "Orders": "ORDERS",
            },
            "OrdersTitle": "Orders",
            "ReviewsTitle": "Reviews",
            "Rules": {
                "Title": "Terms",
                "Part1": "1. You explicitly confirm the use of this website at your own risk. LATVIANSNEAKERS provides this site and its contents on an as it is, so accessible basis and disclaims all statements of warranty of any kind with respect to this site or its contents. LATVIANSNEAKERS disclaims all statements and warranties, including warranties of tradeability and suitability for a particular purpose. Furthermore, LATVIANSNEAKERS does not state or guarantee that the information or products displayed on this site are precise, complete or up to date",
                "Part2": "2. Product, price and availability information is liable to change at any time without advance notice.",
                "Part3": "3. No refunds or size replacements are provided and are not permitted."
            },
            "Delivery": {
                "Title": "Delivery",
                "Attention": "Please note: The delivery time may be affected by courier services' workload.",
                "Part1": "1. You search online/on Instagram/on the website for the model you require, send it to us and we will verify the availability of the item/size.",
                "Part2": "2. Then payment from the customer follows in 100% of the order value + delivery price.",
                "Part3": "3. After we receive payment from you, within 1-3 working days, we pack and arrange shipment of your newly purchased item.",
                "Part4": "4. We ship them by courier service from our warehouse in Riga.",
                "Part5": "5. Our manager from Riga packs and dispatches your products by Omniva throughout the Baltics.",
                "Part6": "6. Average delivery time is 7-15 working days from the moment your item is dispatched to our courier service centre.",
            },
            "Product": {
                "WhatsAppMsg": "You will be redirected to WhatsApp to place your order.",
                "OtherSocsMsg": "However, you can order via any social networking site",
                "OrderBtn": "To order",
            },
            "Shop": {
                "AllModels": "All models",
                "AvailableSizes": "AVAILABLE SIZES",
                "InstBanner": "Feedbacks and the latest news about the shop on Instagram",
                "InstBannerBtn": "Go to",
                "FiltersTitle": "Filters",
                "FiltersSizeTitle": "Size",
                "FiltersBrandTitle": "Brand",
                "FiltersApply": "Apply",
                "FiltersReset": "Discard",
                "SortDefault": "Default",
                "SortPriceAsc": "Price: increasing",
                "SortPriceDesc": "Price: decreasinge",
                "SortNews": "Novelties",
                "NotFound": "No products found by the selected filter",
            }
        }
    },
    ru: {
        translation: {
            "Menu": {
                "Home": "ГЛАВНАЯ",
                "Delivery": "ДОСТАВКА",
                "Rules": "ПРАВИЛА",
                "Reviews": "ОТЗЫВЫ",
                "Orders": "ЗАКАЗЫ",
            },
            "Rules": {
                "Title": "Правила",
                "Part1": "1. Вы прямо подтверждаете, что используете этот сайт на свой страх и риск. LATVIANSNEAKERS предоставляет этот сайт и его содержимое на условиях «как есть, так доступно» и не делает никаких заявлений о каких-либо гарантиях в отношении этого сайта или его содержимого. LATVIANSNEAKERS отказывается от всех заявлений и гарантий, включая коммерческую ценность и гарантии пригодности для определенной цели. Кроме того, LATVIANSNEAKERS не заявляет и не гарантирует, что информация или товары, представленные на этом сайте, являются точными, полными или актуальными.",
                "Part2": "2. Информация о продукте, цене и наличии может быть изменена в любое время без предварительного уведомления.",
                "Part3": "3. Возврата денежных средств, а так же замена размера не предусмотрена и невозможна."
            },
            "Delivery": {
                "Title": "Доставка",
                "Attention": "Важно! Время доставки может варьироваться от загруженности курьерских служб.",
                "Part1": "1. Вы находите в интернете/у нас в Instagram/на сайте, нужную вам модель, присылаете нам, мы подтверждаем наличие товара/размера.",
                "Part2": "2. Затем следует оплата от клиента в 100% сумме заказа + цена доставка.",
                "Part3": "3. Как только мы получаем платеж от Вас, в течение 1-3 рабочих дней, упаковываем и подготавливаем к отправке купленный вами товар.",
                "Part4": "4. Курьерской службой купленный вами товар отправляется с нашего склада в Ригу.",
                "Part5": "5. С Риги наш менеджер расфасовывает и отправляет кроссовки пакоматом Omniva по всей Балтии.",
                "Part6": "6. Средний срок доставки от 7 до 15 рабочих дней с момента отправки вашего товара в центр курьерской службы",
            },
            "Product": {
                "WhatsAppMsg": "Для оформления заказа вас перекинет в WhatsApp",
                "OtherSocsMsg": "Но вы можете сделать заказ через любую социальную сеть",
                "OrderBtn": "Заказать",

            },
            "Shop": {
                "AllModels": "Все модели",
                "AvailableSizes": "ДОСТУПНЫЕ РАЗМЕРЫ",
                "InstBanner": "Отзывы и самые актуальные новости о магазине у нас в instagram",
                "InstBannerBtn": "Перейти",
                "FiltersTitle": "Фильтры",
                "FiltersSizeTitle": "Размер",
                "FiltersBrandTitle": "Бренд",
                "FiltersApply": "Применить",
                "FiltersReset": "Сбросить",
                "SortDefault": "По-умолчанию",
                "SortPriceAsc": "Цена: по возрастанию",
                "SortPriceDesc": "Цена: по убыванию",
                "SortNews": "Новинки",
                "NotFound": "Товары по выбранному фильтру не найдены",
            }
        }
    },
    lv: {
        translation: {
            "Menu": {
                "Home": "HOME",
                "Delivery": "SHIPPING",
                "Rules": "RULES",
                "Reviews": "REVIEWS",
                "Orders": "ORDERS",
            },
            "Rules": {
                "Title": "Terms",
                "Part1": "1. You explicitly confirm the use of this website at your own risk. LATVIANSNEAKERS provides this site and its contents on an as it is, so accessible basis and disclaims all statements of warranty of any kind with respect to this site or its contents. LATVIANSNEAKERS disclaims all statements and warranties, including warranties of tradeability and suitability for a particular purpose. Furthermore, LATVIANSNEAKERS does not state or guarantee that the information or products displayed on this site are precise, complete or up to date",
                "Part2": "2. Product, price and availability information is liable to change at any time without advance notice.",
                "Part3": "3. No refunds or size replacements are provided and are not permitted."
            },
            "Delivery": {
                "Title": "Delivery",
                "Attention": "Please note: The delivery time may be affected by courier services' workload.",
                "Part1": "1. You search online/on Instagram/on the website for the model you require, send it to us and we will verify the availability of the item/size.",
                "Part2": "2. Then payment from the customer follows in 100% of the order value + delivery price.",
                "Part3": "3. After we receive payment from you, within 1-3 working days, we pack and arrange shipment of your newly purchased item.",
                "Part4": "4. We ship them by courier service from our warehouse in Riga.",
                "Part5": "5. Our manager from Riga packs and dispatches your products by Omniva throughout the Baltics.",
                "Part6": "6. Average delivery time is 7-15 working days from the moment your item is dispatched to our courier service centre.",
            },
            "Product": {
                "WhatsAppMsg": "You will be redirected to WhatsApp to place your order.",
                "OtherSocsMsg": "However, you can order via any social networking site",
                "OrderBtn": "To order",
            },
            "Shop": {
                "AllModels": "All models",
                "AvailableSizes": "AVAILABLE SIZES",
                "InstBanner": "Feedbacks and the latest news about the shop on Instagram",
                "InstBannerBtn": "Go to",
                "FiltersTitle": "Filters",
                "FiltersSizeTitle": "Size",
                "FiltersBrandTitle": "Brand",
                "FiltersApply": "Apply",
                "FiltersReset": "Discard",
                "SortDefault": "Default",
                "SortPriceAsc": "Price: increasing",
                "SortPriceDesc": "Price: decreasinge",
                "SortNews": "Novelties",
                "NotFound": "No products found by the selected filter",
            }
        }
    }
};

i18n
    // Enables the i18next backend
    .use(Backend)
    // Enable automatic language detection
    .use(LanguageDetector)
    // Enables the hook initialization module
    .use(initReactI18next)
    .init({
        resources,
        // Standard language used
        fallbackLng: 'en',
        debug: true,
        //Detects and caches a cookie from the language provided
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
    })

export default i18n;