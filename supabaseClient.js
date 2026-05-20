// Supabase 서버 원격 연결 클라이언트 공통 설정
const supabaseUrl = 'https://pppbhlpxbepqrbnpggib.supabase.co';
const supabaseKey = 'sb_publishable_Jh0S8GT6Gud8JC18_vYsbQ_uAHXtZ8A';

// 글로벌 변수로 supabase 객체 선언
const supabase = supabasejs.createClient(supabaseUrl, supabaseKey);