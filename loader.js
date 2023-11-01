 function loader () {
    return `
    <section class='loader'>
        <div class='loader-center'>
          <div class='chars'>
            <span class='char brace'>{</span>
            <span class='dots'>
              <span class='char dot _dot-1'>.</span>
              <span class='char dot _dot-2'>.</span>
              <span class='char dot _dot-3'>.</span>
            </span>
            <span class='char brace'>}</span>
          </div>
        </div>    
      </div>
      </section>
    `
}
export default loader;