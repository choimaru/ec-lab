<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const { mode } = route.params;

const title = mode === 'create' ? 'ユーザ登録' : 'ユーザ詳細';

const formUser = reactive({
  userCd: '',
  userName: '',
  kana: '',
  email: '',
  password: '',
  departmentCd: '',
  authority: '0',
  employmentStatus: '0',
  incumbencyStatus: '0',
  loginAt: '',
  failureCount: 0,
  lockedAt: '',
  gender: '0',
  birthday: '',
  zip: '',
  prefecture: '',
  address: '',
  building: '',
  entryDate: '',
  retirementDate: '',
});

const departmentName = ref('営業部営業1課');

const tabList = [
  { id: 'tab1', name: '基本情報' },
  { id: 'tab2', name: '個人情報' },
];
const pickedTabId = ref('tab1');

const authorityList = [
  { id: '0', name: '一般' },
  { id: '1', name: '中級' },
  { id: '2', name: '上級' },
  { id: '3', name: '人事' },
  { id: '99', name: '管理者' },
];

const incumbencyList = [
  { id: '0', name: '在職中' },
  { id: '1', name: '退職' },
];

const genderList = [
  { id: '0', name: '男性' },
  { id: '1', name: '女性' },
];

const send = (): void => {
  const form = document.querySelector('.form') as HTMLFormElement;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(...formData.entries());
  });
};

/**
 * 更新可能者
 *   2: 登録モード時、権限が「3：人事」、「99：管理者」
 *   1: ログインユーザ = 詳細のユーザコード
 *   0: その他
 */
const permitLv = computed((): number => {
  if (mode === 'create') return 2;

  const loginInfo = useLoginInfo();

  if (loginInfo.value.authority === 3 || loginInfo.value.authority === 99) {
    return 2;
  }

  if (loginInfo.value.userId === 'U0001') {
    return 1;
  }

  return 0;
});
</script>

<template>
  <H1Title>{{ title }}</H1Title>
  <form class="box_create" @submit="send">
    <TabNavi :list="tabList" v-model:pickedId="pickedTabId" />
    <div class="content" v-show="pickedTabId === 'tab1'">
      <div class="item">
        <LabelItem required>ユーザコード</LabelItem>
        <InputText size="m" v-model="formUser.userCd" :disabled="permitLv < 2" />
      </div>
      <div class="item">
        <LabelItem required>氏名</LabelItem>
        <InputText size="l" v-model="formUser.userName" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem required>ふりがな</LabelItem>
        <InputText size="l" v-model="formUser.kana" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem required>メールアドレス</LabelItem>
        <InputText size="xl" v-model="formUser.email" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem required>パスワード</LabelItem>
        <InputText type="password" size="xl" v-model="formUser.password" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem>組織コード</LabelItem>
        <InputText size="m" v-model="formUser.departmentCd" :disabled="permitLv < 2" />
        <IconSearch />
        <span class="name_space">
          {{ departmentName }}
        </span>
      </div>
      <div class="item">
        <LabelItem>権限</LabelItem>
        <RadioList
          :list="authorityList"
          id-prefix="auth_"
          v-model:pickedId="formUser.authority"
          :disabled="permitLv < 2"
        />
      </div>
      <div class="item">
        <LabelItem>雇用形態</LabelItem>
        <select v-model="formUser.employmentStatus" :class="{ g_disabled: permitLv < 2 }" :disabled="permitLv < 2">
          <option value="0">正社員</option>
          <option value="1">契約社員</option>
          <option value="2">嘱託社員</option>
          <option value="3">派遣社員</option>
          <option value="4">出向社員</option>
          <option value="5">準社員</option>
          <option value="6">パート</option>
          <option value="7">アルバイト</option>
          <option value="8">BP</option>
        </select>
      </div>
      <div class="item">
        <LabelItem>在職区分</LabelItem>
        <RadioList
          :list="incumbencyList"
          id-prefix="incumbency_"
          v-model:pickedId="formUser.incumbencyStatus"
          :disabled="permitLv < 2"
        />
      </div>
      <div class="item">
        <LabelItem>ログイン日時</LabelItem>
        <InputText type="datetime-local" size="l" v-model="formUser.loginAt" :disabled="permitLv < 2" />
      </div>
      <div class="item">
        <LabelItem>ログイン失敗回数</LabelItem>
        <InputText type="number" size="xs" v-model="formUser.failureCount" :disabled="permitLv < 2" />
      </div>
      <div class="item">
        <LabelItem>ロック日時</LabelItem>
        <InputText type="datetime-local" size="l" v-model="formUser.lockedAt" :disabled="permitLv < 2" />
      </div>
    </div>
    <div class="content" v-show="pickedTabId === 'tab2'">
      <div class="item">
        <LabelItem>性別</LabelItem>
        <RadioList :list="genderList" id-prefix="gender_" v-model:pickedId="formUser.gender" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem>生年月日</LabelItem>
        <InputText type="date" size="m" v-model="formUser.birthday" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem>郵便番号</LabelItem>
        <InputText size="s" v-model="formUser.zip" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem>都道府県</LabelItem>
        <select v-model="formUser.prefecture" :class="{ g_disabled: permitLv < 1 }" :disabled="permitLv < 1">
          <optgroup label="北海道・東北">
            <option value="hokkaido">北海道</option>
            <option value="aomori">青森県</option>
            <option value="iwate">岩手県</option>
            <option value="miyagi">宮城県</option>
            <option value="akita">秋田県</option>
            <option value="yamagata">山形県</option>
            <option value="fukushima">福島県</option>
          </optgroup>
          <optgroup label="関東">
            <option value="ibaraki">茨城県</option>
            <option value="tochigi">栃木県</option>
            <option value="gunma">群馬県</option>
            <option value="saitama">埼玉県</option>
            <option value="chiba">千葉県</option>
            <option value="tokyo">東京都</option>
            <option value="kanagawa">神奈川県</option>
          </optgroup>
          <optgroup label="中部">
            <option value="niigata">新潟県</option>
            <option value="toyama">富山県</option>
            <option value="ishikawa">石川県</option>
            <option value="fukui">福井県</option>
            <option value="yamanashi">山梨県</option>
            <option value="nagano">長野県</option>
            <option value="gifu">岐阜県</option>
            <option value="shizuoka">静岡県</option>
            <option value="aichi">愛知県</option>
          </optgroup>
          <optgroup label="近畿">
            <option value="mie">三重県</option>
            <option value="shiga">滋賀県</option>
            <option value="kyoto">京都府</option>
            <option value="osaka">大阪府</option>
            <option value="hyogo">兵庫県</option>
            <option value="nara">奈良県</option>
            <option value="wakayama">和歌山県</option>
          </optgroup>
          <optgroup label="中国">
            <option value="tottori">鳥取県</option>
            <option value="shimane">島根県</option>
            <option value="okayama">岡山県</option>
            <option value="hiroshima">広島県</option>
            <option value="yamaguchi">山口県</option>
          </optgroup>
          <optgroup label="四国">
            <option value="tokushima">徳島県</option>
            <option value="kagawa">香川県</option>
            <option value="ehime">愛媛県</option>
            <option value="kochi">高知県</option>
          </optgroup>
          <optgroup label="九州・沖縄">
            <option value="fukuoka">福岡県</option>
            <option value="saga">佐賀県</option>
            <option value="nagasaki">長崎県</option>
            <option value="kumamoto">熊本県</option>
            <option value="oita">大分県</option>
            <option value="miyazaki">宮崎県</option>
            <option value="kagoshima">鹿児島県</option>
            <option value="okinawa">沖縄県</option>
          </optgroup>
        </select>
      </div>
      <div class="item">
        <LabelItem>住所</LabelItem>
        <InputText size="xl" v-model="formUser.address" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem>建物</LabelItem>
        <InputText size="xl" v-model="formUser.building" :disabled="permitLv < 1" />
      </div>
      <div class="item">
        <LabelItem>入社日</LabelItem>
        <InputText type="date" size="m" v-model="formUser.entryDate" :disabled="permitLv < 2" />
      </div>
      <div class="item">
        <LabelItem>退職日</LabelItem>
        <InputText type="date" size="m" v-model="formUser.retirementDate" :disabled="permitLv < 2" />
      </div>
    </div>
    <div class="buttons">
      <ButtonCreate />
      <ButtonClear />
      <ButtonBack @on-back="router.push('/user/list')" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.box_create {
  padding-top: 8px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #e6e9ed;
}

.item {
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
}

.icon_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.name_space {
  margin-top: 3px;
  margin-left: 8px;
}

.buttons {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  margin-left: 16px;

  button:first-child {
    margin-right: 40px;
  }
}
</style>
