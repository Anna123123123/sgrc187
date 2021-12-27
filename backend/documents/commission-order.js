module.exports = ({name, participants}) => {
   const today = new Date();
   return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Проект приказа на создание комиссии по категорированию</title>
          <style>
            h1,h2, h3, p {
               font-size: 14px;
            }

            h1 {
               text-align: center;
            }

            h1,h3 {
               font-weight: bold;
            }

            h2 {
               font-style: italic;
               text-align: center;
            }

            p {
               text-align: justify;
               text-indent: 40px;
            }

            ul, li {
               list-style: none;
               text-decoration: none;
               margin:0;
               padding:0;
            }

            .margin-top {
             margin-top: 50px;
             }

             .justify-center {
             text-align: center;
             }

             .invoice-box {
                padding-left: 40px;
                padding-right: 20px;
                margin-top: 50px;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
            <h1>Проект приказа на создание комиссии по категорированию</h1>
            <h1>ПРИКАЗ</h1>
            <h2>(проект)</h2>
            <p>В соответствии с Федеральным законом от 26.07.2017 № 187-ФЗ «О безопасности критической информационной инфраструктуры Российской Федерации», постановлением Правительства РФ от 08.02.2018 № 127 «Об утверждении Правил категорирования объектов критической информационной инфраструктуры Российской Федерации, а также перечня показателей критериев значимости объектов критической информационной инфраструктуры Российской Федерации и их значений», в целях организации проведения работ по категорированию объектов критической информационной инфраструктуры в ${`${name}`}</p>
            <h3><p>
            ПРИКАЗЫВАЮ:
            </p>
            </h3>

            <ul>
               <li>
                  <p>
                     1. Создать комиссию по категорированию объектов критической информационной инфраструктуры в ${`${name}`}.
                  </p> 
               </li>
               <li>
                  <p>
                     2. Утвердить состав постоянно действующей комиссии по категорированию объектов критической информационной инфраструктуры согласно приложению № 1 к приказу. 
                  </p>  
               </li>
               <li>
                  <p>
                     3. Утвердить Положение о постоянно действующей комиссии по категорированию объектов критической информационной инфраструктуры ${`${name}`}.
                  </p>
               </li>
               <li>
                  <p>
                     4. Комиссии организовать работу по категорированию объектов критической информационной инфраструктуры ${`${name}`} в строгом соответствии с постановлением Правительства РФ от 08.02.2018 № 127 «Об утверждении Правил категорирования объектов критической информационной инфраструктуры Российской Федерации, а также Перечня показателей критериев значимости объектов критической информационной инфраструктуры Российской Федерации и их значений.
                  </p>
               </li>
               <li>
               <p>
                  5. Контроль за исполнением настоящего приказа оставляю за собой.
               </p>
            </li>
            </ul>

             <table cellpadding="0" cellspacing="0">
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               __________
                            </td>
                            <td>
                              ________________________
                            </td>
                         </tr>
                         <tr>
                            <td>
                              (должность)
                            </td>
                            <td>
                               (подпись)  (Ф.И.О.)
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>           
             </table>

          </div>
       </body>
    </html>
    `;
};