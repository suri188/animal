import http from "../utils/http";
export const getHome = ()=>http("get","/api/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=415&is_single=0&system=wap&isWeb=1")