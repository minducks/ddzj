<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\finance;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\finance\AccountLogLists;
use app\common\enum\AccountLogEnum;

class AccountLogController extends BaseAdminController
{
    /**
     * @notes 账户流水记录列表
     * @return \think\response\Json
     * @author ljj
     * @date 2022/12/2 5:30 下午
     */
    public function lists()
    {
        return $this->dataLists(new AccountLogLists());
    }

    /**
     * @notes 变动类型列表
     * @return array|\think\response\Json
     * @author ljj
     * @date 2022/5/31 5:06 下午
     */
    public function changeTypeLists()
    {
        $params = $this->request->get('change_object',AccountLogEnum::MONEY);
        if ($params == AccountLogEnum::MONEY) {
            return $this->data(AccountLogEnum::getMoneyChangeTypeDesc());
        }
        if ($params == AccountLogEnum::EARNINGS) {
            return $this->data(AccountLogEnum::getEarningsChangeTypeDesc());
        }

        return [];
    }
}