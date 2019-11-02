



import baikal from './img/delivery/baikal.svg';
import russian_post from './img/delivery/russian_post.png';
import delin from './img/delivery/delin.png';
import pek from './img/delivery/pek.png';
import cdek from './img/delivery/cdek.png';
import pickup_point from './img/delivery/pickup-point.png'


var DeliveryData = [

	{
		url:'https://www.baikalsr.ru/',
		website:'www.baikalsr.ru',
		img: baikal,
		styles: 'wrapp_img',
		title:'ТК «Байкал Сервис»',
		tel:'tel:8-495-995-08-09',
		phone:'8 (495) 995-08-09',
		status:'Статус груза / заявки',
		link_status:'https://www.baikalsr.ru/info/tracking/',
		price:'Расчет стоимости доставки',
		link_price:'https://www.baikalsr.ru/tools/calculator/',
	},
	{
		url:'https://www.dellin.ru/',
		website:'www.dellin.ru',
		img: delin,
		styles: 'img_size_delin wrapp_img',
		title:'ТК «Деловые линии»',
		tel:'tel:8-800-100-80-00',
		phone: '8 (800) 100–80-00',
		status:'Статус груза / заявки',
		link_status:'https://www.dellin.ru/tracker/',
		price:'Расчет стоимости доставки',
		link_price:'https://www.dellin.ru/requests/',
	},
	{
		url:'https://pecom.ru/',
		website:'www.pecom.ru',
		img: pek,
		styles: 'wrapp_img',
		title:'ТК «ПЭК»',
		tel:'tel:8-495-600-11-11',
		phone:'8 (495) 660-11-11',
		status:'Статус груза / заявки',
		link_status:'https://pecom.ru/services-are/order-status/',
		price:'Расчет стоимости доставки',
		link_price:'https://pecom.ru/services-are/shipping-request/',
	},
	{
		url:'https://www.cdek.ru/',
		website:'www.cdek.ru',
		img: cdek,
		styles: 'wrapp_img',
		title:'ТК «СДЭК»',
		tel:'tel:8-800-250-04-05',
		phone:'8 (800) 250-04-05',
		status:'Статус груза / заявки',
		link_status:'https://www.cdek.ru/track.html',
		price:'Расчет стоимости доставки',
		link_price:'https://www.cdek.ru/calculator.html',
	},
	{
		url:'https://www.pochta.ru/',
		website:'www.pochta.ru',
		img: russian_post,
		styles: 'wrapp_img',
		title:'«Почта России»',
		tel:'tel:8-800-200-58-88',
		phone:'8 (800) 200-58-88',
		status:'Статус груза / заявки',
		link_status:'https://www.pochta.ru/tracking',
		price:'Расчет стоимости доставки',
		link_price:'https://www.pochta.ru/parcels',
	},
	{
		url:'/Contacts',
		website:'Контакты',
		img: pickup_point,
		styles: 'img_size_point wrapp_img',
		title:'Самовывоз',
		tel:'tel:8-969-196-99-94',
		phone:'8 (969) 196-99-94',
		status:'Заказать звонок',
		link_status:'/Contacts',
		price:'Уточнить наличие на складе',
		link_price:'/Contacts',
	},

];



let AllDeliveryElements = DeliveryData.map((alldelivery) =>

        <div class="box_delivery">

          <div class="com_title">
            <p>{alldelivery.title}</p>
          </div>
          <div class="com_title">
            <a href={alldelivery.url} target="_blank">{alldelivery.website}</a>
          </div>
          <div class="com_logo">
            <div class="com_image">
              <div class={alldelivery.styles}>
                <a href={alldelivery.url} target="_blank">
                  <Image src={alldelivery.img} />
                </a>
              </div>
            </div>
          </div>
          <div class="com_info">
            <p>
              <a href={alldelivery.tel}>{alldelivery.phone}</a>
            </p>
          </div>
          <div class="wrapp_btn">
            <a href={alldelivery.link_status} target="_blank">
              <button id="delivery_btn" class="my_primary__btn">
                <i class="fa fa-chevron-right"></i>
                {alldelivery.status}
              </button>
            </a>
          </div>
          <div className="wrapp_btn">
            <a href={alldelivery.link_price} target="_blank">
              <button id="delivery_btn" class="my_primary__btn">
                <i class="fa fa-chevron-right"></i>
                {alldelivery.price}
              </button>
            </a>
          </div>

        </div>
		)
		return (
				<div class="all_box_delivery">
					{AllDeliveryElements}
			  </div>
		)




document.getElementById("asanas").innerHTML = AllDeliveryElements;
