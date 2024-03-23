<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Smh\V20210712\Models;
use TencentCloud\Common\AbstractModel;

/**
 * DescribeOfficialInstances请求参数结构体
 *
 * @method boolean getSuperAdminAccount() 获取是否查询实例绑定的超级管理员账号，默认值为 false。
 * @method void setSuperAdminAccount(boolean $SuperAdminAccount) 设置是否查询实例绑定的超级管理员账号，默认值为 false。
 * @method array getInstanceIds() 获取按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。
 * @method void setInstanceIds(array $InstanceIds) 设置按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。
 * @method integer getPageNumber() 获取页码，整型，配合 PageSize 使用，默认值为 1。
 * @method void setPageNumber(integer $PageNumber) 设置页码，整型，配合 PageSize 使用，默认值为 1。
 * @method integer getPageSize() 获取每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
 * @method void setPageSize(integer $PageSize) 设置每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
 */
class DescribeOfficialInstancesRequest extends AbstractModel
{
    /**
     * @var boolean 是否查询实例绑定的超级管理员账号，默认值为 false。
     */
    public $SuperAdminAccount;

    /**
     * @var array 按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。
     */
    public $InstanceIds;

    /**
     * @var integer 页码，整型，配合 PageSize 使用，默认值为 1。
     */
    public $PageNumber;

    /**
     * @var integer 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
     */
    public $PageSize;

    /**
     * @param boolean $SuperAdminAccount 是否查询实例绑定的超级管理员账号，默认值为 false。
     * @param array $InstanceIds 按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。
     * @param integer $PageNumber 页码，整型，配合 PageSize 使用，默认值为 1。
     * @param integer $PageSize 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("SuperAdminAccount",$param) and $param["SuperAdminAccount"] !== null) {
            $this->SuperAdminAccount = $param["SuperAdminAccount"];
        }

        if (array_key_exists("InstanceIds",$param) and $param["InstanceIds"] !== null) {
            $this->InstanceIds = $param["InstanceIds"];
        }

        if (array_key_exists("PageNumber",$param) and $param["PageNumber"] !== null) {
            $this->PageNumber = $param["PageNumber"];
        }

        if (array_key_exists("PageSize",$param) and $param["PageSize"] !== null) {
            $this->PageSize = $param["PageSize"];
        }
    }
}
