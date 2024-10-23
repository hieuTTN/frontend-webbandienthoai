var token = localStorage.getItem("token");
var exceptionCode = 417;

async function loadMenu() {
    var dn = `<div class="itemiconheader">
                <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="8" r="4" stroke="red" stroke-width="2" fill="none"/> <path d="M4 20C4 16.6863 7.13401 14 11 14H13C16.866 14 20 16.6863 20 20" stroke="red" stroke-width="2" fill="none"/> </svg>
                </div>
                <span class="nav-item dropdown txtheader">
                    <a class="nav-link txtheader" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="text-bg">Tài khoản</span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Tài khoản</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="logout()">Đăng xuất</a></li>
                    </ul>
                </span>
            </div>`
    if (token == null) {
        dn = `
        <div class="itemiconheader">
            <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="10" stroke="red" stroke-width="2" fill="none"/> <path d="M12 8L16 12L12 16" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <path d="M8 12H16" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/> </svg>
            </div>
            <a href="login.html" class="txtheader">
                <span class="text-bg">Đăng nhập</span>
            </a>
        </div>
        `
    }
    var menu =
        `<div class="containercustom container">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <a class="navbar-brand tagaheadersdt" href="#"><img src="image/logo.png"><span class="sdtheader">0815.208.208 | 0818.215.215</span></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 listheadermenu">
                        <form class="searchheader">
                            <input class="form-control" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search">
                          </form>
                    </ul>
                    <div class="d-flex">
                        <div class="itemiconheader">
                            <div class="icon">
                                <svg width="20px" height="20px" x="0px" y="0px" viewBox="0 0 513.64 513.64" style="enable-background:new 0 0 513.64 513.64;" xml:space="preserve"> 						<g> 							<g> 								<path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path> 							</g> 						</g> 						</svg>
                            </div>
                            <a href="tel:093243245" class="txtheader">
                                <span class="text-sm">Bán hàng</span>
                                <span class="text-bg">Online</span>
                            </a>
                        </div>
                        <div class="itemiconheader">
                            <div class="icon">
                                <svg width="20px" height="20px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> 	<g> 		<path d="M497.36,69.995c-7.532-7.545-19.753-7.558-27.285-0.032L238.582,300.845l-83.522-90.713    c-7.217-7.834-19.419-8.342-27.266-1.126c-7.841,7.217-8.343,19.425-1.126,27.266l97.126,105.481    c3.557,3.866,8.535,6.111,13.784,6.22c0.141,0.006,0.277,0.006,0.412,0.006c5.101,0,10.008-2.026,13.623-5.628L497.322,97.286    C504.873,89.761,504.886,77.54,497.36,69.995z"></path> 	</g> </g> <g> 	<g> 		<path d="M492.703,236.703c-10.658,0-19.296,8.638-19.296,19.297c0,119.883-97.524,217.407-217.407,217.407    c-119.876,0-217.407-97.524-217.407-217.407c0-119.876,97.531-217.407,217.407-217.407c10.658,0,19.297-8.638,19.297-19.296    C275.297,8.638,266.658,0,256,0C114.84,0,0,114.84,0,256c0,141.154,114.84,256,256,256c141.154,0,256-114.846,256-256    C512,245.342,503.362,236.703,492.703,236.703z"></path> 	</g> </g> </svg>		
                            </div>
                            <a href="product.html" class="txtheader">
                                <span class="text-sm">Tra cứu</span>
                                <span class="text-bg">Sản phẩm</span>
                            </a>
                        </div>
                        <div class="itemiconheader">
                            <div class="icon">
                                <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 182.6 226.8" style="enable-background:new 0 0 182.6 226.8;" xml:space="preserve"> <g> <path d="M0,196.9c0-2.3,0-4.5,0-6.8c0.9-8.9,10.6-116.3,12.4-137.2C13,46.4,16.5,43.1,23,43c6.6,0,13.1,0,19.7,0 c1.4,0,2.1-0.3,2.4-1.9c3-19.6,13.9-32.6,32.8-39c2.4-0.8,5.3-1.8,7.8-2C94.2-0.4,98.5,0.7,99,0.8c13.6,2.7,24.5,9.6,31.9,21.5 c3.9,6.3,6,13.2,6.9,20.8c7.4,0,14.6,0,21.8,0c6.3,0,9.9,3.1,10.5,9.3c1.1,11.4,11.6,129.1,12.5,138.9c0,2.3,0,4.5,0,6.8 c-0.1,0.4-0.4,0.9-0.4,1.3c-1.5,13.6-15.7,25.3-29.5,26.9c-2.2,0.3-4.5,0.5-6.7,0.5c-36.7,0-73.4,0.1-110.1,0 c-10.9,0-20.3-3.8-27.8-12C3.4,209.7,1,203.6,0,196.9z M63.4,61.7c-0.1,0.4-0.3,0.5-0.3,0.7c0,4.4,0,8.8-0.1,13.2 c-0.1,3.9-1.2,7.2-4.9,9.2c-6.4,3.4-13.4-1-13.6-8.5c-0.1-4.8,0-9.7,0-14.6c-5,0-9.6,0-14.5,0c-0.1,1-0.2,1.8-0.3,2.6 c-1.2,13.5-9.7,111-11.1,125.3c-1,9.9,3.2,16.2,12.7,18.3c2,0.4,4.1,0.5,6.2,0.5c35.8,0,71.6,0,107.4,0c1.6,0,3.2-0.1,4.8-0.3 c8.1-1.4,15.3-6.5,14.3-16.6c-1.3-13.2-11.4-127.4-11.7-129.8c-5,0-9.5,0-14.3,0c0,4.7,0,9.3,0,13.9c-0.1,4.2-1.4,7.8-5.6,9.6 c-6.3,2.7-12.7-1.7-12.8-8.9c-0.1-4.8,0-9.7,0-14.7C100.6,61.7,82.1,61.7,63.4,61.7z M63.8,42.8c18.3,0,36.7,0,55,0 c0.5-12.1-14.1-24.7-28-24.5C77.3,18.5,63.1,31.4,63.8,42.8z"></path> </g> 1</svg>
                                <span class="quantitycartheader">2</span>
                            </div>
                            <a href="giohang.html" class="txtheader">
                                <span class="text-bg">Giỏ hàng</span>
                            </a>
                        </div>
                        ${dn}
                    </div>
                  </div>
                </div>
            </nav>
        </div>`
    document.getElementById("menumain").innerHTML = menu
}


async function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace('/login.html')
}
