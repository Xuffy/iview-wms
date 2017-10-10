<template>
  <div class="header-box">
    <Row class-name="header">
      <Col span="12">
      <img class="c5-icon logo" src="../../assets/images/logo.png">
      <h2 class="c5-icon title">C5管理系统模板</h2>
      </Col>
      <Col span="12" style="text-align: right;padding-right: 20px">
      <Dropdown trigger="click">
        <a href="javascript:void(0)">
          User Name
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>用户信息</DropdownItem>
          <DropdownItem>修改密码</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown trigger="click">
        <a href="javascript:void(0)">
          退出
          <Icon type="log-out"></Icon>
        </a>
      </Dropdown>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {}
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/style/base.less';

  .header-box {
    height: 70px;
  }

  .header {
    height: 100%;
    line-height: 70px;
    background-color: @header-back;
  }

  .logo {
    width: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .title {
    font-size: 24px;
    color: #ffffff;
    font-weight: 400;
  }

  .ivu-dropdown-rel a {
    color: #ffffff;
    font-size: 14px;
  }

  .ivu-dropdown {
    margin-left: 30px;
  }
  .ivu-dropdown-menu{
    text-align: left;
  }
</style>
