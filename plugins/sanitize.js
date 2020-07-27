import Vue from 'vue'

Vue.mixin({
  methods: {
    Sanitize(string) {
      let slug = "";
      let titleLower = string.toLowerCase();
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      slug = slug.replace(/\?/gi, '');
      slug = slug.replace(/\,/gi, '');
      slug = slug.replace(/đ/gi, 'd');
      slug = slug.replace(/\s*$/g, '');
      slug = slug.replace(/\s+/g, '-');
      return slug;
    },
    UnSanitize(string) {
      let slug = "";
      slug = string.replace(/\-/gi, ' ');
      return slug;
    }
  }
})
