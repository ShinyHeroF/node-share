import { log } from 'console';
import { get } from 'http';

// const apiUrl = 'http://inner-dev.health.cpic.com/amis/api/project/channel_management/full?_replace=1';
// const apiUrl = 'https://h-h5api-sit.cpic.com.cn/product-instance/2SjL9T8B/';
// const apiUrl = 'http://inner-dev.health.cpic.com/amis/api/user/info';
const apiUrl = 'http://inner-sit.health.cpic.com/amis/api/project/ywxzs/full?_replace=1';
// amis dev full
// `http://inner-dev.health.cpic.com/amis/api/project/channel_management/full?_replace=1`,
// {
//   timeout: 200,
//   headers: {
//     Cookies:
//       'visid_incap_2313793=nJ73ohLvTUeZyAwQuNfiWRpgR2QAAAAAQUIPAAAAAABygDJ0lSXC0g6+GaObPZvl; sc_is_visitor_unique=rx11479374.1682399259.2B520F3D8F0C4F67808B8A1961C77467.1.1.1.1.1.1.1.1.1; SSO_SESSION_V2=88c75206a2a3ceb76e737faf4298fbd0e369f89ca33a01b1b11d4222eca594c15c17603c90e650ef616599f4400d6b12b833d1bff3bef55bc018cd994e666fea059ac30eea446094591e16da477ad638.NCEld08LZKEHN2FsxN4vIQ6mkkC1LDsXUqM2GqFc9Bw; AMIS_SESS=dg42l7BDORgS4QDT0yblETqeknUZVhoqeVaZLmC9fCBa8MT1CIm246SFEAbSD6csKnANriGa3uCgClNyxer5SSGds948jiymb3ltAGctwkmxzSmp3GMC9ItF3Yj20oZ-m_s89q73O7IuWWBCQ0RPXJ20P2nfOV74ON0LZLXtcVBQmr6_SC4P3oldoIcEe-iCPG480QfrqWe41QTOYXzq9QVifXkXYPmPRqu-GDnTrBL8QO23E3ClNH65zEPYkJNCc2aQpTcwY73CSMZh5yp5npYG24UmEnuFTD6C9OiQtEvkvwBL3d5xZQHaY2qzqBiJ',
//   },
// },
setInterval(() => {
  const beginTimeStamp = new Date().getTime();
  // request.setHeader('Cookie', ['type=ninja', 'language=javascript']);

  get(
    apiUrl,
    {
      timeout: 200,
      headers: {
        Cookies:
          'visid_incap_2313793=nJ73ohLvTUeZyAwQuNfiWRpgR2QAAAAAQUIPAAAAAABygDJ0lSXC0g6+GaObPZvl; sc_is_visitor_unique=rx11479374.1682399259.2B520F3D8F0C4F67808B8A1961C77467.1.1.1.1.1.1.1.1.1; SSO_SESSION_V2=88c75206a2a3ceb76e737faf4298fbd0e369f89ca33a01b1b11d4222eca594c15c17603c90e650ef616599f4400d6b12b833d1bff3bef55bc018cd994e666fea059ac30eea446094591e16da477ad638.zgvbcAEEPD23uvV9yCtoumnFTy3cnzmQ3VVzSWGaA%2Bg; AMIS_SESS=u6ACt2vQo7RoWOhoeLIvarEX91i7skQ5enKOgseKMzuvz-0koh2CVc0MiSNzC4qBI0yTOmq6HEo_6uXXIOT98VY-9adAN8Co5IOBpkRpZMydG5C1HGjOG0_IBdWM6X6yUXMHkpAf7nFaKGmM7F0lTMnzvNDn9lQ04OVPxVwDQQALlAZekBpR-46UiBns_r7Yl7RkmmGPpebgWy-vDAdxP9390THvsjiH0EvgxWmZGe5f6AY-vgd59IypJoaztvMbvvni6y98HV9VDssy8zOWs6-qSUKJT_TEqnQjc38437D9aVpK3esQ9pDRMBw8rPc6Fi5id3mQXOEDKU-GQ94onii9k8L_K2J_7YK9LJomGGCOxz-x9vXkDbbEM9VWKyrws7dSc_xfRP0GvlHHZp_aybfDkZiC0NJNH9V0_LdX_eynyzQteGn9d9RbNV5ma0sHzHUY7mHbZICVnkiKHAdZzi8RTN5kYEL8c8HAvaNu5_yaB5qmq3sLDbM2cB5S1eXc7PhTWyHnply5rI6-jhDwdNgXQBvqQFdFHWfDfUgFqclFW5-SjS8Qhy1-om1T_Bj5LOKDSWVl5apH0jjpjuxfNHUvJesiV2uKTuBxVKDh1-ELJCP0Vg1L9TbgD99ViR7t_tPVlKTA9sTdcLC3mlVWEhlWGmF5TAHDIS0P8iq6alC34MHw0WlTAKHoRjJFe_vwZ-EiDixu2zWUR7RCuR1WEjygBSVR2HCmwXfO3LD4YKetFonRLdY089agxu6-Th2b3l4DwpqQFJ1YdhzkVVOfA-rILnS4umBASHiez7UkjGh4-1hyBsLALavkZoHBbh49eT3Dks9_nY1yBnC_POllnTl9e8boh8UllZt-9NdBoA52ZswqqrqLu56UVBfYEh8LQpCWdwcAAYIPA7ep3H5njQ==',
      },
    },
    (res) => {
      res.on('data', (dataBuffer) => {
        log('data ==>', dataBuffer);
      });
      res.on('end', () => {
        const endTimeStamp = new Date().getTime();
        log('End API Time ==>', endTimeStamp - beginTimeStamp);
        // console.log('API Time ==>', endTimeStamp - beginTimeStamp);
      });
      res.on('timeout', () => {
        const endTimeStamp = new Date().getTime();
        log('Timeout API Time ==>', endTimeStamp - beginTimeStamp);
        // console.log('API Time ==>', endTimeStamp - beginTimeStamp);
      });
    },
  ).on('error', (err) => {
    const endTimeStamp = new Date().getTime();
    log('Error API Time ==>', endTimeStamp - beginTimeStamp);
    log('error ==>', err);
  });
}, 10);
