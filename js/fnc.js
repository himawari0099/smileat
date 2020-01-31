


// よくある質問のアニメーション
const qa_box_min = 36;
const qa_box = document . getElementsByClassName('qa_block');
let qa_opn_flg = [];

Object . keys( qa_box ) . forEach(function( i ){
	var height = qa_box[ i ] . clientHeight - 40;
	qa_opn_flg[ i ] = true;
	qa_box[ i ] . style . height = qa_box_min + 'px';

	qa_box[ i ] . addEventListener('click', function(){
		if( qa_opn_flg[ i ] ){
			// 開く
			this . style . height = height + 'px';
			qa_opn_flg[ i ] = false;
		} else{
			// 閉じる
			this . style . height = qa_box_min + 'px';
			qa_opn_flg[ i ] = true;
		}
	},false);
});



// トップへのスクロール
