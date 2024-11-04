// 飞书文档 https://qat1k1beyr.fs.cpic.com.cn/wiki/wikqmobKFDTGZQTYtxH89wCiKzf
// import fs from 'node:fs'

// fs.write(1, 'Hello', (err) => {
//     if (err) throw err;
//     console.log('File created!');
//     fs.close(1, (err) => {
//         if (err) throw err
//     })
// })

import { readFile, appendFile, rm } from 'node:fs/promises';
import fs from 'node:fs';
import _ from 'lodash';
// promise
try {
  // const filePath = new URL('./test.txt', import.meta.url);
  // console.log('filePath ==>', filePath);
//   const contents = await readFile(filePath);
  // const contents = await readFile(filePath, { encoding: 'utf8' });
  // console.log(contents);

  // rm('./fs/xxx', {recursive:true})
} catch (err) {
  // console.error(err);
}

// callback
// var buf = new Buffer.alloc(3);
// fs.open('testd.txt', (err, fd) => {
//   if (err) throw err;
//   fs.read(fd, buf, {position:2,length:3}, (err, bytesRead, buffer) => {
//     if (err) throw err;
//     console.log('bytesRead ==>', bytesRead);
//     console.log('buffer ==>', buffer);

//     fs.close(fd);
//   });
// });
const a = [
  {
    "code": "ALB",
    "name": "阿尔巴尼亚",
    "pinyins": ["a_er_ba_ni_ya", "e_er_ba_ni_ya"]
  },
  {
    "code": "DZA",
    "name": "阿尔及利亚",
    "pinyins": ["a_er_ji_li_ya", "e_er_ji_li_ya"]
  },
  {
    "code": "AFG",
    "name": "阿富汗",
    "pinyins": ["a_fu_han"]
  },
  {
    "code": "ARG",
    "name": "阿根廷",
    "pinyins": ["a_gen_ting"]
  },
  {
    "code": "ARE",
    "name": "阿联酋",
    "pinyins": ["a_lian_qiu", "e_lian_qiu"]
  },
  {
    "code": "ABW",
    "name": "阿鲁巴",
    "pinyins": ["a_lu_ba", "e_lu_ba"]
  },
  {
    "code": "OMN",
    "name": "阿曼",
    "pinyins": ["a_man"]
  },
  {
    "code": "AZE",
    "name": "阿塞拜疆",
    "pinyins": ["a_sai_bai_jiang"]
  },
  {
    "code": "IRL",
    "name": "爱尔兰",
    "pinyins": ["ai_er_lan"]
  },
  {
    "code": "EGY",
    "name": "埃及",
    "pinyins": ["ai_ji"]
  },
  {
    "code": "ETH",
    "name": "埃塞俄比亚",
    "pinyins": ["ai_sai_e_bi_ya", "ai_se_e_bi_ya"]
  },
  {
    "code": "EST",
    "name": "爱沙尼亚",
    "pinyins": ["ai_sha_ni_ya"]
  },
  {
    "code": "AND",
    "name": "安道尔",
    "pinyins": ["an_dao_er"]
  },
  {
    "code": "AGO",
    "name": "安哥拉",
    "pinyins": ["an_ge_la"]
  },
  {
    "code": "AIA",
    "name": "安圭拉",
    "pinyins": ["an_gui_la"]
  },
  {
    "code": "ATG",
    "name": "安提瓜和巴布达",
    "pinyins": [
      "an_ti_gua_he_ba_bu_da",
      "an_ti_gua_huo_ba_bu_da",
      "an_ti_gua_hu_ba_bu_da",
      "an_di_gua_he_ba_bu_da",
      "an_di_gua_huo_ba_bu_da",
      "an_di_gua_hu_ba_bu_da"
    ]
  },
  {
    "code": "AUS",
    "name": "澳大利亚",
    "pinyins": ["ao_da_li_ya"]
  },
  {
    "code": "AUT",
    "name": "奥地利",
    "pinyins": ["ao_di_li"]
  },
  {
    "code": "BRB",
    "name": "巴巴多斯",
    "pinyins": ["ba_ba_duo_si"]
  },
  {
    "code": "PNG",
    "name": "巴布亚新几内亚",
    "pinyins": ["ba_bu_ya_xin_ji_nei_ya", "ba_bu_ya_xin_ji_na_ya"]
  },
  {
    "code": "BHS",
    "name": "巴哈马",
    "pinyins": ["ba_ha_ma"]
  },
  {
    "code": "PAK",
    "name": "巴基斯坦",
    "pinyins": ["ba_ji_si_tan"]
  },
  {
    "code": "PRY",
    "name": "巴拉圭",
    "pinyins": ["ba_la_gui"]
  },
  {
    "code": "PSE",
    "name": "巴勒斯坦",
    "pinyins": ["ba_le_si_tan"]
  },
  {
    "code": "BHR",
    "name": "巴林",
    "pinyins": ["ba_lin"]
  },
  {
    "code": "PAN",
    "name": "巴拿马",
    "pinyins": ["ba_na_ma"]
  },
  {
    "code": "BAS",
    "name": "巴士克",
    "pinyins": ["ba_shi_ke"]
  },
  {
    "code": "BRE",
    "name": "巴西",
    "pinyins": ["ba_xi"]
  },
  {
    "code": "BIE",
    "name": "白俄罗斯",
    "pinyins": ["bai_e_luo_si"]
  },
  {
    "code": "BMU",
    "name": "百慕大",
    "pinyins": ["bai_mu_da", "bai_mu_dai", "bai_mu_tai"]
  },
  {
    "code": "BUL",
    "name": "保加利亚",
    "pinyins": ["bao_jia_li_ya"]
  },
  {
    "code": "MNP",
    "name": "北马里亚纳",
    "pinyins": ["bei_ma_li_ya_na"]
  },
  {
    "code": "BEN",
    "name": "贝宁",
    "pinyins": ["bei_ning", "bei_zhu"]
  },
  {
    "code": "BEL",
    "name": "比利时",
    "pinyins": ["bi_li_shi"]
  },
  {
    "code": "ISL",
    "name": "冰岛",
    "pinyins": ["bing_dao"]
  },
  {
    "code": "BWA",
    "name": "博茨瓦纳",
    "pinyins": ["bo_ci_wa_na"]
  },
  {
    "code": "PRI",
    "name": "波多黎各",
    "pinyins": ["bo_duo_li_ge"]
  },
  {
    "code": "POL",
    "name": "波兰",
    "pinyins": ["bo_lan"]
  },
  {
    "code": "BOL",
    "name": "玻利维亚",
    "pinyins": ["bo_li_wei_ya"]
  },
  {
    "code": "BLZ",
    "name": "伯利兹",
    "pinyins": ["bo_li_zi"]
  },
  {
    "code": "BIH",
    "name": "波斯尼亚和黑塞",
    "pinyins": [
      "bo_si_ni_ya_he_hei_sai",
      "bo_si_ni_ya_he_hei_se",
      "bo_si_ni_ya_huo_hei_sai",
      "bo_si_ni_ya_huo_hei_se",
      "bo_si_ni_ya_hu_hei_sai",
      "bo_si_ni_ya_hu_hei_se"
    ]
  },
  {
    "code": "BTN",
    "name": "不丹",
    "pinyins": ["bu_dan"]
  },
  {
    "code": "BFA",
    "name": "布基纳法索",
    "pinyins": ["bu_ji_na_fa_suo"]
  },
  {
    "code": "BDI",
    "name": "布隆迪",
    "pinyins": ["bu_long_di"]
  },
  {
    "code": "BVT",
    "name": "布维岛",
    "pinyins": ["bu_wei_dao"]
  },
  {
    "code": "PRK",
    "name": "朝鲜",
    "pinyins": ["chao_xian"]
  },
  {
    "code": "GNQ",
    "name": "赤道几内亚",
    "pinyins": ["chi_dao_ji_nei_ya", "chi_dao_ji_na_ya"]
  },
  {
    "code": "DAN",
    "name": "丹麦",
    "pinyins": ["dan_mai"]
  },
  {
    "code": "D",
    "name": "德国",
    "pinyins": ["de_guo"]
  },
  {
    "code": "TMP",
    "name": "东帝汶",
    "pinyins": ["dong_di_wen", "dong_di_men"]
  },
  {
    "code": "TGO",
    "name": "多哥",
    "pinyins": ["duo_ge"]
  },
  {
    "code": "DOM",
    "name": "多米尼加共",
    "pinyins": ["duo_mi_ni_jia_gong"]
  },
  {
    "code": "DMA",
    "name": "多米尼克",
    "pinyins": ["duo_mi_ni_ke"]
  },
  {
    "code": "ECU",
    "name": "厄瓜多尔",
    "pinyins": ["e_gua_duo_er"]
  },
  {
    "code": "ERI",
    "name": "厄立特里亚",
    "pinyins": ["e_li_te_li_ya"]
  },
  {
    "code": "RUS",
    "name": "俄罗斯",
    "pinyins": ["e_luo_si"]
  },
  {
    "code": "F",
    "name": "法国",
    "pinyins": ["fa_guo"]
  },
  {
    "code": "FRO",
    "name": "法罗群岛",
    "pinyins": ["fa_luo_qun_dao"]
  },
  {
    "code": "PYF",
    "name": "法属波利尼西亚",
    "pinyins": ["fa_shu_bo_li_ni_xi_ya", "fa_zhu_bo_li_ni_xi_ya"]
  },
  {
    "code": "GUF",
    "name": "法属圭亚那",
    "pinyins": [
      "fa_shu_gui_ya_na",
      "fa_shu_gui_ya_nei",
      "fa_zhu_gui_ya_na",
      "fa_zhu_gui_ya_nei"
    ]
  },
  {
    "code": "ATF",
    "name": "法属南部领土",
    "pinyins": ["fa_shu_nan_bu_ling_tu", "fa_zhu_nan_bu_ling_tu"]
  },
  {
    "code": "VAT",
    "name": "梵蒂冈",
    "pinyins": ["fan_di_gang"]
  },
  {
    "code": "FJI",
    "name": "斐济",
    "pinyins": ["fei_ji"]
  },
  {
    "code": "PHL",
    "name": "菲律宾",
    "pinyins": ["fei_lv_bin"]
  },
  {
    "code": "FIN",
    "name": "芬兰",
    "pinyins": ["fen_lan"]
  },
  {
    "code": "CPV",
    "name": "佛得角",
    "pinyins": [
      "fo_de_jiao",
      "fo_de_jue",
      "fo_dei_jiao",
      "fo_dei_jue",
      "fu_de_jiao",
      "fu_de_jue",
      "fu_dei_jiao",
      "fu_dei_jue",
      "bi_de_jiao",
      "bi_de_jue",
      "bi_dei_jiao",
      "bi_dei_jue",
      "bo_de_jiao",
      "bo_de_jue",
      "bo_dei_jiao",
      "bo_dei_jue"
    ]
  },
  {
    "code": "GMB",
    "name": "冈比亚",
    "pinyins": ["gang_bi_ya"]
  },
  {
    "code": "COG",
    "name": "刚果（布）",
    "pinyins": ["gang_guo_（_bu_）"]
  },
  {
    "code": "COD",
    "name": "刚果（金）",
    "pinyins": ["gang_guo_（_jin_）"]
  },
  {
    "code": "GRD",
    "name": "格林纳达",
    "pinyins": ["ge_lin_na_da"]
  },
  {
    "code": "GRL",
    "name": "格陵兰",
    "pinyins": ["ge_ling_lan"]
  },
  {
    "code": "GEO",
    "name": "格鲁吉亚",
    "pinyins": ["ge_lu_ji_ya"]
  },
  {
    "code": "COL",
    "name": "哥伦比亚",
    "pinyins": ["ge_lun_bi_ya"]
  },
  {
    "code": "CRI",
    "name": "哥斯达黎加",
    "pinyins": ["ge_si_da_li_jia"]
  },
  {
    "code": "CUB",
    "name": "古巴",
    "pinyins": ["gu_ba"]
  },
  {
    "code": "GLP",
    "name": "瓜德罗普",
    "pinyins": ["gua_de_luo_pu"]
  },
  {
    "code": "GUM",
    "name": "关岛",
    "pinyins": ["guan_dao"]
  },
  {
    "code": "GUY",
    "name": "圭亚那",
    "pinyins": ["gui_ya_na", "gui_ya_nei"]
  },
  {
    "code": "KAZ",
    "name": "哈萨克斯坦",
    "pinyins": ["ha_sa_ke_si_tan"]
  },
  {
    "code": "HTI",
    "name": "海地",
    "pinyins": ["hai_di"]
  },
  {
    "code": "KOR",
    "name": "韩国",
    "pinyins": ["han_guo"]
  },
  {
    "code": "HMD",
    "name": "赫德岛和麦克",
    "pinyins": [
      "he_de_dao_he_mai_ke",
      "he_de_dao_huo_mai_ke",
      "he_de_dao_hu_mai_ke"
    ]
  },
  {
    "code": "NL",
    "name": "荷兰",
    "pinyins": ["he_lan"]
  },
  {
    "code": "ANT",
    "name": "荷属安的列斯",
    "pinyins": [
      "he_shu_an_de_lie_si",
      "he_shu_an_di_lie_si",
      "he_zhu_an_de_lie_si",
      "he_zhu_an_di_lie_si"
    ]
  },
  {
    "code": "HND",
    "name": "洪都拉斯",
    "pinyins": ["hong_dou_la_si"]
  },
  {
    "code": "DJI",
    "name": "吉布提",
    "pinyins": ["ji_bu_ti", "ji_bu_di"]
  },
  {
    "code": "KGZ",
    "name": "吉尔吉斯斯坦",
    "pinyins": ["ji_er_ji_si_si_tan"]
  },
  {
    "code": "KIR",
    "name": "基里巴斯",
    "pinyins": ["ji_li_ba_si"]
  },
  {
    "code": "GIN",
    "name": "几内亚",
    "pinyins": ["ji_nei_ya", "ji_na_ya"]
  },
  {
    "code": "GNB",
    "name": "几内亚比绍",
    "pinyins": ["ji_nei_ya_bi_shao", "ji_na_ya_bi_shao"]
  },
  {
    "code": "GHA",
    "name": "加纳",
    "pinyins": ["jia_na"]
  },
  {
    "code": "CAN",
    "name": "加拿大",
    "pinyins": ["jia_na_da", "jia_na_dai", "jia_na_tai"]
  },
  {
    "code": "GAB",
    "name": "加蓬",
    "pinyins": ["jia_peng"]
  },
  {
    "code": "KHM",
    "name": "柬埔寨",
    "pinyins": ["jian_pu_zhai", "jian_bu_zhai"]
  },
  {
    "code": "TCH",
    "name": "捷克",
    "pinyins": ["jie_ke"]
  },
  {
    "code": "ZWE",
    "name": "津巴布韦",
    "pinyins": ["jin_ba_bu_wei"]
  },
  {
    "code": "CMR",
    "name": "喀麦隆",
    "pinyins": ["ka_mai_long"]
  },
  {
    "code": "QAT",
    "name": "卡塔尔",
    "pinyins": ["ka_ta_er", "qia_ta_er"]
  },
  {
    "code": "CYM",
    "name": "开曼群岛",
    "pinyins": ["kai_man_qun_dao"]
  },
  {
    "code": "CCK",
    "name": "科科斯(基林)",
    "pinyins": ["ke_ke_si_(_ji_lin_)"]
  },
  {
    "code": "CRO",
    "name": "克罗埃西亚",
    "pinyins": ["ke_luo_ai_xi_ya"]
  },
  {
    "code": "HRV",
    "name": "克罗地亚",
    "pinyins": ["ke_luo_di_ya", "ke_luo_de_ya"]
  },
  {
    "code": "COM",
    "name": "科摩罗",
    "pinyins": ["ke_mo_luo", "ke_ma_luo"]
  },
  {
    "code": "CIV",
    "name": "科特迪瓦",
    "pinyins": ["ke_te_di_wa"]
  },
  {
    "code": "KWT",
    "name": "科威特",
    "pinyins": ["ke_wei_te"]
  },
  {
    "code": "KEN",
    "name": "肯尼亚",
    "pinyins": ["ken_ni_ya"]
  },
  {
    "code": "COK",
    "name": "库克群岛",
    "pinyins": ["ku_ke_qun_dao"]
  },
  {
    "code": "LVA",
    "name": "拉脱维亚",
    "pinyins": ["la_tuo_wei_ya"]
  },
  {
    "code": "LSO",
    "name": "莱索托",
    "pinyins": ["lai_suo_tuo"]
  },
  {
    "code": "LAO",
    "name": "老挝",
    "pinyins": ["lao_wo"]
  },
  {
    "code": "LBN",
    "name": "黎巴嫩",
    "pinyins": ["li_ba_nen"]
  },
  {
    "code": "LBR",
    "name": "利比里亚",
    "pinyins": ["li_bi_li_ya"]
  },
  {
    "code": "LBY",
    "name": "利比亚",
    "pinyins": ["li_bi_ya"]
  },
  {
    "code": "LTU",
    "name": "立陶宛",
    "pinyins": ["li_tao_wan", "li_tao_yuan"]
  },
  {
    "code": "LIE",
    "name": "列支敦士登",
    "pinyins": ["lie_zhi_dun_shi_deng", "lie_zhi_dui_shi_deng"]
  },
  {
    "code": "REU",
    "name": "留尼汪",
    "pinyins": ["liu_ni_wang"]
  },
  {
    "code": "L",
    "name": "卢森堡",
    "pinyins": ["lu_sen_bao", "lu_sen_bu", "lu_sen_pu"]
  },
  {
    "code": "RWA",
    "name": "卢旺达",
    "pinyins": ["lu_wang_da"]
  },
  {
    "code": "ROU",
    "name": "罗马尼亚",
    "pinyins": ["luo_ma_ni_ya"]
  },
  {
    "code": "MDG",
    "name": "马达加斯加",
    "pinyins": ["ma_da_jia_si_jia"]
  },
  {
    "code": "MDV",
    "name": "马尔代夫",
    "pinyins": ["ma_er_dai_fu"]
  },
  {
    "code": "MLT",
    "name": "马耳他",
    "pinyins": ["ma_er_ta"]
  },
  {
    "code": "FLK",
    "name": "马尔维纳斯",
    "pinyins": ["ma_er_wei_na_si"]
  },
  {
    "code": "MWI",
    "name": "马拉维",
    "pinyins": ["ma_la_wei"]
  },
  {
    "code": "MAL",
    "name": "马来西亚",
    "pinyins": ["ma_lai_xi_ya"]
  },
  {
    "code": "MLI",
    "name": "马里",
    "pinyins": ["ma_li"]
  },
  {
    "code": "MHL",
    "name": "马绍尔群岛",
    "pinyins": ["ma_shao_er_qun_dao"]
  },
  {
    "code": "MKD",
    "name": "马斯顿",
    "pinyins": ["ma_si_dun"]
  },
  {
    "code": "MTQ",
    "name": "马提尼克",
    "pinyins": ["ma_ti_ni_ke", "ma_di_ni_ke"]
  },
  {
    "code": "MYT",
    "name": "马约特",
    "pinyins": ["ma_yue_te", "ma_yao_te"]
  },
  {
    "code": "MUS",
    "name": "毛里求斯",
    "pinyins": ["mao_li_qiu_si"]
  },
  {
    "code": "MRT",
    "name": "毛里塔尼亚",
    "pinyins": ["mao_li_ta_ni_ya"]
  },
  {
    "code": "USA",
    "name": "美国",
    "pinyins": ["mei_guo"]
  },
  {
    "code": "UMI",
    "name": "美属本土外小岛",
    "pinyins": ["mei_shu_ben_tu_wai_xiao_dao", "mei_zhu_ben_tu_wai_xiao_dao"]
  },
  {
    "code": "ASM",
    "name": "美属萨摩亚",
    "pinyins": [
      "mei_shu_sa_mo_ya",
      "mei_shu_sa_ma_ya",
      "mei_zhu_sa_mo_ya",
      "mei_zhu_sa_ma_ya"
    ]
  },
  {
    "code": "VIR",
    "name": "美属维尔京群岛",
    "pinyins": ["mei_shu_wei_er_jing_qun_dao", "mei_zhu_wei_er_jing_qun_dao"]
  },
  {
    "code": "MNG",
    "name": "蒙古",
    "pinyins": ["meng_gu"]
  },
  {
    "code": "BGD",
    "name": "孟加拉国",
    "pinyins": ["meng_jia_la_guo"]
  },
  {
    "code": "MSR",
    "name": "蒙特塞拉特",
    "pinyins": ["meng_te_sai_la_te", "meng_te_se_la_te"]
  },
  {
    "code": "FSM",
    "name": "密克罗尼西亚",
    "pinyins": ["mi_ke_luo_ni_xi_ya"]
  },
  {
    "code": "PER",
    "name": "秘鲁",
    "pinyins": ["bi_lu"]
  },
  {
    "code": "MMR",
    "name": "缅甸",
    "pinyins": ["mian_dian", "mian_tian", "mian_sheng"]
  },
  {
    "code": "MDA",
    "name": "摩尔多瓦",
    "pinyins": ["mo_er_duo_wa", "ma_er_duo_wa"]
  },
  {
    "code": "MAR",
    "name": "摩洛哥",
    "pinyins": ["mo_luo_ge", "ma_luo_ge"]
  },
  {
    "code": "MCO",
    "name": "摩纳哥",
    "pinyins": ["mo_na_ge", "ma_na_ge"]
  },
  {
    "code": "MOZ",
    "name": "莫桑比克",
    "pinyins": ["mo_sang_bi_ke"]
  },
  {
    "code": "MEX",
    "name": "墨西哥",
    "pinyins": ["mo_xi_ge"]
  },
  {
    "code": "NAM",
    "name": "纳米比亚",
    "pinyins": ["na_mi_bi_ya"]
  },
  {
    "code": "ZAF",
    "name": "南非",
    "pinyins": ["nan_fei", "na_fei"]
  },
  {
    "code": "ATA",
    "name": "南极洲",
    "pinyins": ["nan_ji_zhou", "na_ji_zhou"]
  },
  {
    "code": "SGS",
    "name": "南乔治亚和南桑",
    "pinyins": [
      "nan_qiao_zhi_ya_he_nan_sang",
      "nan_qiao_zhi_ya_he_na_sang",
      "nan_qiao_zhi_ya_huo_nan_sang",
      "nan_qiao_zhi_ya_huo_na_sang",
      "nan_qiao_zhi_ya_hu_nan_sang",
      "nan_qiao_zhi_ya_hu_na_sang",
      "na_qiao_zhi_ya_he_nan_sang",
      "na_qiao_zhi_ya_he_na_sang",
      "na_qiao_zhi_ya_huo_nan_sang",
      "na_qiao_zhi_ya_huo_na_sang",
      "na_qiao_zhi_ya_hu_nan_sang",
      "na_qiao_zhi_ya_hu_na_sang"
    ]
  },
  {
    "code": "YU",
    "name": "南斯拉夫",
    "pinyins": ["nan_si_la_fu", "na_si_la_fu"]
  },
  {
    "code": "NRU",
    "name": "瑙鲁",
    "pinyins": ["nao_lu"]
  },
  {
    "code": "NPL",
    "name": "尼泊尔",
    "pinyins": ["ni_bo_er", "ni_po_er"]
  },
  {
    "code": "NIC",
    "name": "尼加拉瓜",
    "pinyins": ["ni_jia_la_gua"]
  },
  {
    "code": "NER",
    "name": "尼日尔",
    "pinyins": ["ni_ri_er"]
  },
  {
    "code": "NGA",
    "name": "尼日利亚",
    "pinyins": ["ni_ri_li_ya"]
  },
  {
    "code": "NIU",
    "name": "纽埃",
    "pinyins": ["niu_ai"]
  },
  {
    "code": "NFK",
    "name": "诺福克岛",
    "pinyins": ["nuo_fu_ke_dao"]
  },
  {
    "code": "NOR",
    "name": "挪威",
    "pinyins": ["nuo_wei"]
  },
  {
    "code": "PLW",
    "name": "帕劳",
    "pinyins": ["pa_lao"]
  },
  {
    "code": "PCN",
    "name": "皮特凯恩群岛",
    "pinyins": ["pi_te_kai_en_qun_dao"]
  },
  {
    "code": "POR",
    "name": "葡萄牙",
    "pinyins": ["pu_tao_ya"]
  },
  {
    "code": "JAP",
    "name": "日本",
    "pinyins": ["ri_ben"]
  },
  {
    "code": "SWE",
    "name": "瑞典",
    "pinyins": ["rui_dian"]
  },
  {
    "code": "CHE",
    "name": "瑞士",
    "pinyins": ["rui_shi"]
  },
  {
    "code": "SLV",
    "name": "萨尔瓦多",
    "pinyins": ["sa_er_wa_duo"]
  },
  {
    "code": "SER",
    "name": "赛尔维亚",
    "pinyins": ["sai_er_wei_ya"]
  },
  {
    "code": "SCG",
    "name": "塞尔维亚和黑山",
    "pinyins": [
      "sai_er_wei_ya_he_hei_shan",
      "sai_er_wei_ya_huo_hei_shan",
      "sai_er_wei_ya_hu_hei_shan",
      "se_er_wei_ya_he_hei_shan",
      "se_er_wei_ya_huo_hei_shan",
      "se_er_wei_ya_hu_hei_shan"
    ]
  },
  {
    "code": "SLE",
    "name": "塞拉利昂",
    "pinyins": ["sai_la_li_ang", "se_la_li_ang"]
  },
  {
    "code": "SEN",
    "name": "塞内加尔",
    "pinyins": ["sai_nei_jia_er"]
  },
  {
    "code": "CYP",
    "name": "塞浦路斯",
    "pinyins": ["sai_pu_lu_si", "se_pu_lu_si"]
  },
  {
    "code": "SYC",
    "name": "塞舌尔",
    "pinyins": ["sai_she_er", "se_she_er"]
  },
  {
    "code": "ARA",
    "name": "沙特阿拉伯",
    "pinyins": [
      "sha_te_a_la_bo",
      "sha_te_a_la_bai",
      "sha_te_a_la_ba",
      "sha_te_e_la_bo",
      "sha_te_e_la_bai",
      "sha_te_e_la_ba"
    ]
  },
  {
    "code": "CXR",
    "name": "圣诞岛",
    "pinyins": ["sheng_dan_dao"]
  },
  {
    "code": "STP",
    "name": "圣多美和普林西",
    "pinyins": [
      "sheng_duo_mei_he_pu_lin_xi",
      "sheng_duo_mei_huo_pu_lin_xi",
      "sheng_duo_mei_hu_pu_lin_xi"
    ]
  },
  {
    "code": "SHN",
    "name": "圣赫勒拿",
    "pinyins": ["sheng_he_le_na", "sheng_he_lei_na"]
  },
  {
    "code": "KNA",
    "name": "圣基茨和尼维",
    "pinyins": [
      "sheng_ji_ci_he_ni_wei",
      "sheng_ji_ci_huo_ni_wei",
      "sheng_ji_ci_hu_ni_wei"
    ]
  },
  {
    "code": "LCA",
    "name": "圣卢西亚",
    "pinyins": ["sheng_lu_xi_ya"]
  },
  {
    "code": "SMR",
    "name": "圣马力诺",
    "pinyins": ["sheng_ma_li_nuo"]
  },
  {
    "code": "SPM",
    "name": "圣皮埃尔和密克",
    "pinyins": [
      "sheng_pi_ai_er_he_mi_ke",
      "sheng_pi_ai_er_huo_mi_ke",
      "sheng_pi_ai_er_hu_mi_ke"
    ]
  },
  {
    "code": "VCT",
    "name": "圣文森特和格林",
    "pinyins": [
      "sheng_wen_sen_te_he_ge_lin",
      "sheng_wen_sen_te_huo_ge_lin",
      "sheng_wen_sen_te_hu_ge_lin"
    ]
  },
  {
    "code": "LKA",
    "name": "斯里兰卡",
    "pinyins": ["si_li_lan_ka", "si_li_lan_qia"]
  },
  {
    "code": "SVK",
    "name": "斯洛伐克",
    "pinyins": ["si_luo_fa_ke"]
  },
  {
    "code": "SVN",
    "name": "斯洛文尼亚",
    "pinyins": ["si_luo_wen_ni_ya"]
  },
  {
    "code": "SJM",
    "name": "斯瓦尔巴和扬马廷",
    "pinyins": [
      "si_wa_er_ba_he_yang_ma_ting",
      "si_wa_er_ba_huo_yang_ma_ting",
      "si_wa_er_ba_hu_yang_ma_ting"
    ]
  },
  {
    "code": "SWZ",
    "name": "斯威士兰",
    "pinyins": ["si_wei_shi_lan"]
  },
  {
    "code": "SDN",
    "name": "苏丹",
    "pinyins": ["su_dan"]
  },
  {
    "code": "SUR",
    "name": "苏里南",
    "pinyins": ["su_li_nan", "su_li_na"]
  },
  {
    "code": "SLB",
    "name": "所罗门群岛",
    "pinyins": ["suo_luo_men_qun_dao"]
  },
  {
    "code": "SOM",
    "name": "索马里",
    "pinyins": ["suo_ma_li"]
  },
  {
    "code": "TJK",
    "name": "塔吉克斯坦",
    "pinyins": ["ta_ji_ke_si_tan"]
  },
  {
    "code": "THA",
    "name": "泰国",
    "pinyins": ["tai_guo"]
  },
  {
    "code": "TZA",
    "name": "坦桑尼亚",
    "pinyins": ["tan_sang_ni_ya"]
  },
  {
    "code": "TON",
    "name": "汤加",
    "pinyins": ["tang_jia", "shang_jia"]
  },
  {
    "code": "TCA",
    "name": "特克斯和凯科斯",
    "pinyins": [
      "te_ke_si_he_kai_ke_si",
      "te_ke_si_huo_kai_ke_si",
      "te_ke_si_hu_kai_ke_si"
    ]
  },
  {
    "code": "TTO",
    "name": "特立尼达和多巴",
    "pinyins": [
      "te_li_ni_da_he_duo_ba",
      "te_li_ni_da_huo_duo_ba",
      "te_li_ni_da_hu_duo_ba"
    ]
  },
  {
    "code": "TUR",
    "name": "土耳其",
    "pinyins": ["tu_er_qi"]
  },
  {
    "code": "TKM",
    "name": "土库曼斯坦",
    "pinyins": ["tu_ku_man_si_tan"]
  },
  {
    "code": "TUN",
    "name": "突尼斯",
    "pinyins": ["tu_ni_si"]
  },
  {
    "code": "TUV",
    "name": "图瓦卢",
    "pinyins": ["tu_wa_lu"]
  },
  {
    "code": "TKL",
    "name": "托克劳",
    "pinyins": ["tuo_ke_lao"]
  },
  {
    "code": "WLF",
    "name": "瓦利斯和富图纳",
    "pinyins": [
      "wa_li_si_he_fu_tu_na",
      "wa_li_si_huo_fu_tu_na",
      "wa_li_si_hu_fu_tu_na"
    ]
  },
  {
    "code": "VUT",
    "name": "瓦努阿图",
    "pinyins": ["wa_nu_a_tu", "wa_nu_e_tu"]
  },
  {
    "code": "GTM",
    "name": "危地马拉",
    "pinyins": ["wei_di_ma_la", "wei_de_ma_la"]
  },
  {
    "code": "WEL",
    "name": "威尔士",
    "pinyins": ["wei_er_shi"]
  },
  {
    "code": "VEN",
    "name": "委内瑞拉",
    "pinyins": ["wei_nei_rui_la", "wei_na_rui_la"]
  },
  {
    "code": "BRN",
    "name": "文莱",
    "pinyins": ["wen_lai"]
  },
  {
    "code": "UGA",
    "name": "乌干达",
    "pinyins": ["wu_gan_da"]
  },
  {
    "code": "UKR",
    "name": "乌克兰",
    "pinyins": ["wu_ke_lan"]
  },
  {
    "code": "URY",
    "name": "乌拉圭",
    "pinyins": ["wu_la_gui"]
  },
  {
    "code": "UZB",
    "name": "乌兹别克斯坦",
    "pinyins": ["wu_zi_bie_ke_si_tan", "wu_ci_bie_ke_si_tan"]
  },
  {
    "code": "E",
    "name": "西班牙",
    "pinyins": ["xi_ban_ya"]
  },
  {
    "code": "HEB",
    "name": "希伯来",
    "pinyins": ["xi_bo_lai", "xi_bai_lai", "xi_ba_lai"]
  },
  {
    "code": "GR",
    "name": "希腊",
    "pinyins": ["xi_la"]
  },
  {
    "code": "ESH",
    "name": "西撒哈拉",
    "pinyins": ["xi_sa_ha_la"]
  },
  {
    "code": "WSM",
    "name": "西萨摩亚",
    "pinyins": ["xi_sa_mo_ya", "xi_sa_ma_ya"]
  },
  {
    "code": "SGP",
    "name": "新加坡",
    "pinyins": ["xin_jia_po"]
  },
  {
    "code": "NCL",
    "name": "新喀里多尼亚",
    "pinyins": ["xin_ka_li_duo_ni_ya"]
  },
  {
    "code": "NZL",
    "name": "新西兰",
    "pinyins": ["xin_xi_lan"]
  },
  {
    "code": "H",
    "name": "匈牙利",
    "pinyins": ["xiong_ya_li"]
  },
  {
    "code": "SYR",
    "name": "叙利亚",
    "pinyins": ["xu_li_ya"]
  },
  {
    "code": "JAM",
    "name": "牙买加",
    "pinyins": ["ya_mai_jia"]
  },
  {
    "code": "ARM",
    "name": "亚美尼亚",
    "pinyins": ["ya_mei_ni_ya"]
  },
  {
    "code": "YEM",
    "name": "也门",
    "pinyins": ["ye_men"]
  },
  {
    "code": "ITA",
    "name": "意大利",
    "pinyins": ["yi_da_li", "yi_dai_li", "yi_tai_li"]
  },
  {
    "code": "IRQ",
    "name": "伊拉克",
    "pinyins": ["yi_la_ke"]
  },
  {
    "code": "IRN",
    "name": "伊朗",
    "pinyins": ["yi_lang"]
  },
  {
    "code": "ISR",
    "name": "以色列",
    "pinyins": ["yi_se_lie"]
  },
  {
    "code": "IN",
    "name": "印度",
    "pinyins": ["yin_du"]
  },
  {
    "code": "IDN",
    "name": "印尼",
    "pinyins": ["yin_ni"]
  },
  {
    "code": "GB",
    "name": "英国",
    "pinyins": ["ying_guo"]
  },
  {
    "code": "VGB",
    "name": "英属维尔京群岛",
    "pinyins": ["ying_shu_wei_er_jing_qun_dao", "ying_zhu_wei_er_jing_qun_dao"]
  },
  {
    "code": "IOT",
    "name": "英属印度洋",
    "pinyins": ["ying_shu_yin_du_yang", "ying_zhu_yin_du_yang"]
  },
  {
    "code": "JOR",
    "name": "约旦",
    "pinyins": ["yue_dan"]
  },
  {
    "code": "VIE",
    "name": "越南",
    "pinyins": ["yue_nan", "yue_na"]
  },
  {
    "code": "ZAR",
    "name": "扎伊尔",
    "pinyins": ["za_yi_er", "zha_yi_er"]
  },
  {
    "code": "ZMB",
    "name": "赞比亚",
    "pinyins": ["zan_bi_ya"]
  },
  {
    "code": "TCD",
    "name": "乍得",
    "pinyins": ["zha_de", "zha_dei"]
  },
  {
    "code": "GIB",
    "name": "直布罗陀",
    "pinyins": ["zhi_bu_luo_tuo"]
  },
  {
    "code": "CHL",
    "name": "智利",
    "pinyins": ["zhi_li"]
  },
  {
    "code": "CAF",
    "name": "中非",
    "pinyins": ["zhong_fei"]
  },
  {
    "code": "CN",
    "name": "中国",
    "pinyins": ["zhong_guo"]
  },
  {
    "code": "MAC",
    "name": "中国澳门",
    "pinyins": ["zhong_guo_ao_men"]
  },
  {
    "code": "TWN",
    "name": "中国台湾",
    "pinyins": ["zhong_guo_tai_wan"]
  },
  {
    "code": "HKG",
    "name": "中国香港",
    "pinyins": ["zhong_guo_xiang_gang", "zhong_guo_xiang_jiang"]
  }
]
const b = [
  { "code": "AE", "name": "阿联酋", },
  { "code": "AF", "name": "阿富汗", },
  { "code": "AL", "name": "阿尔巴尼亚", },
  { "code": "AM", "name": "亚美尼亚", },
  { "code": "AO", "name": "安哥拉", },
  { "code": "AR", "name": "阿根廷", },
  { "code": "AT", "name": "奥地利", },
  { "code": "AU", "name": "澳大利亚", },
  { "code": "AZ", "name": "阿塞拜疆", },
  { "code": "BD", "name": "孟加拉", },
  { "code": "BE", "name": "比利时", },
  { "code": "BF", "name": "布基纳法索", },
  { "code": "BG", "name": "保加利亚", },
  { "code": "BH", "name": "巴林", },
  { "code": "BI", "name": "布隆迪", },
  { "code": "BJ", "name": "贝宁", },
  { "code": "BL", "name": "巴勒斯坦", },
  { "code": "BN", "name": "文莱", },
  { "code": "BO", "name": "玻利维亚", },
  { "code": "BR", "name": "巴西", },
  { "code": "BW", "name": "博茨瓦纳", },
  { "code": "BY", "name": "白俄罗斯", },
  { "code": "CA", "name": "加拿大", },
  { "code": "CF", "name": "中非", },
  { "code": "CG", "name": "刚果", },
  { "code": "CH", "name": "瑞士", },
  { "code": "CL", "name": "智利", },
  { "code": "CM", "name": "喀麦隆", },
  { "code": "CN", "name": "中国", },
  { "code": "CO", "name": "哥伦比亚", },
  { "code": "CR", "name": "哥斯达黎加", },
  { "code": "CS", "name": "捷克", },
  { "code": "CU", "name": "古巴", },
  { "code": "CY", "name": "塞浦路斯", },
  { "code": "D", "name": "德国", },
  { "code": "DK", "name": "丹麦", },
  { "code": "DO", "name": "多米尼加共和国", },
  { "code": "DZ", "name": "阿尔及利亚", },
  { "code": "EC", "name": "厄瓜多尔", },
  { "code": "EE", "name": "爱沙尼亚", },
  { "code": "EG", "name": "埃及", },
  { "code": "ES", "name": "西班牙", },
  { "code": "ET", "name": "埃塞俄比亚", },
  { "code": "FI", "name": "芬兰", },
  { "code": "FJ", "name": "斐济", },
  { "code": "FR", "name": "法国", },
  { "code": "GA", "name": "加蓬", },
  { "code": "GB", "name": "英国", },
  { "code": "GD", "name": "格林纳达", },
  { "code": "GE", "name": "格鲁吉亚", },
  { "code": "GH", "name": "加纳", },
  { "code": "GN", "name": "几内亚", },
  { "code": "GR", "name": "希腊", },
  { "code": "GT", "name": "危地马拉", },
  { "code": "HK", "name": "香港特别行政区", },
  { "code": "HN", "name": "洪都拉斯", },
  { "code": "HU", "name": "匈牙利", },
  { "code": "ID", "name": "印度尼西亚", },
  { "code": "IE", "name": "爱尔兰", },
  { "code": "IL", "name": "以色列", },
  { "code": "IN", "name": "印度", },
  { "code": "IQ", "name": "伊拉克", },
  { "code": "IR", "name": "伊朗", },
  { "code": "IS", "name": "冰岛", },
  { "code": "IT", "name": "意大利", },
  { "code": "JM", "name": "牙买加", },
  { "code": "JO", "name": "约旦", },
  { "code": "JP", "name": "日本", },
  { "code": "KE", "name": "肯尼亚", },
  { "code": "KG", "name": "吉尔吉斯坦", },
  { "code": "KH", "name": "柬埔寨", },
  { "code": "KP", "name": "北朝鲜", },
  { "code": "KR", "name": "韩国", },
  { "code": "KT", "name": "科特迪瓦共和国", },
  { "code": "KW", "name": "科威特", },
  { "code": "KZ", "name": "哈萨克", },
  { "code": "LA", "name": "老挝", },
  { "code": "LB", "name": "黎巴嫩", },
  { "code": "LC", "name": "圣卢西亚", },
  { "code": "LI", "name": "列支敦士登", },
  { "code": "LK", "name": "斯里兰卡", },
  { "code": "LR", "name": "利比里亚", },
  { "code": "LT", "name": "立陶宛", },
  { "code": "LU", "name": "卢森堡", },
  { "code": "LV", "name": "拉脱维亚", },
  { "code": "LY", "name": "利比亚", },
  { "code": "MA", "name": "摩洛哥", },
  { "code": "MC", "name": "摩纳哥", },
  { "code": "MD", "name": "摩尔多瓦", },
  { "code": "MG", "name": "马达加斯加", },
  { "code": "ML", "name": "马里", },
  { "code": "MM", "name": "缅甸", },
  { "code": "MN", "name": "蒙古", },
  { "code": "MO", "name": "澳门地区", },
  { "code": "MT", "name": "马耳他", },
  { "code": "MU", "name": "毛里求斯", },
  { "code": "MW", "name": "马拉维", },
  { "code": "MX", "name": "墨西哥", },
  { "code": "MY", "name": "马来西亚", },
  { "code": "MZ", "name": "莫桑比克", },
  { "code": "NA", "name": "纳米比亚", },
  { "code": "NE", "name": "尼日尔", },
  { "code": "NG", "name": "尼日利亚", },
  { "code": "NI", "name": "尼加拉瓜", },
  { "code": "NL", "name": "荷兰", },
  { "code": "NO", "name": "挪威", },
  { "code": "NP", "name": "尼泊尔", },
  { "code": "NZ", "name": "新西兰", },
  { "code": "OM", "name": "阿曼", },
  { "code": "PA", "name": "巴拿马", },
  { "code": "PE", "name": "秘鲁", },
  { "code": "PG", "name": "巴布亚新几内亚", },
  { "code": "PH", "name": "菲律宾", },
  { "code": "PK", "name": "巴基斯坦", },
  { "code": "PL", "name": "波兰", },
  { "code": "PT", "name": "葡萄牙", },
  { "code": "PY", "name": "巴拉圭", },
  { "code": "QA", "name": "卡塔尔", },
  { "code": "RO", "name": "罗马尼亚", },
  { "code": "RU", "name": "俄罗斯", },
  { "code": "SA", "name": "沙特阿拉伯", },
  { "code": "SC", "name": "塞舌尔", },
  { "code": "SD", "name": "苏丹", },
  { "code": "SE", "name": "瑞典", },
  { "code": "SG", "name": "新加坡", },
  { "code": "SI", "name": "斯洛文尼亚", },
  { "code": "SK", "name": "斯洛伐克", },
  { "code": "SM", "name": "圣马力诺", },
  { "code": "SN", "name": "塞内加尔", },
  { "code": "SO", "name": "索马里", },
  { "code": "SY", "name": "叙利亚", },
  { "code": "SZ", "name": "斯威士兰", },
  { "code": "TD", "name": "乍得", },
  { "code": "TG", "name": "多哥", },
  { "code": "TH", "name": "泰国", },
  { "code": "TJ", "name": "塔吉克斯坦", },
  { "code": "TM", "name": "土库曼", },
  { "code": "TN", "name": "突尼斯", },
  { "code": "TR", "name": "土耳其", },
  { "code": "TW", "name": "台湾省", },
  { "code": "TZ", "name": "坦桑尼亚", },
  { "code": "UA", "name": "乌克兰", },
  { "code": "UG", "name": "乌干达", },
  { "code": "US", "name": "美国", },
  { "code": "UY", "name": "乌拉圭", },
  { "code": "UZ", "name": "乌兹别克", },
  { "code": "VC", "name": "圣文森特岛", },
  { "code": "VE", "name": "委内瑞拉", },
  { "code": "VN", "name": "越南", },
  { "code": "YE", "name": "也门", },
  { "code": "YU", "name": "南斯拉夫联盟", },
  { "code": "ZA", "name": "南非", },
  { "code": "ZM", "name": "赞比亚", },
  { "code": "ZR", "name": "扎伊尔", },
  { "code": "ZW", "name": "津巴布韦", },
]

// const y = differenceBy(b, a, 'name') // 15
// console.log('difference', y);

// 140 ok
const x = _.intersectionBy(a, b, 'name') // 140
const x_result = x.map((item) => {
  return {
    ...item,
    code: b.find((bb) => bb.name === item.name)?.code
  }
})
console.log('b ==>', x_result);
fs.appendFile('test.txt', JSON.stringify(x_result), (err) => {
  console.log('append error', err);
})
// fs.rm('xxx', {recursive:true}, (err) => {
//   console.log('callback rm error ==>', err);
// })