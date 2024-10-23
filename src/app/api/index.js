// Import Router và Cache từ Worktop
import { Router } from "worktop";
import * as Cache from "worktop/cache";

// Tạo một instance mới của Router
const API = new Router();

// Định nghĩa một route GET "/api/alive" để kiểm tra xem server có hoạt động không
API.add("GET", "/api/alive", (req, res) => {
  res.end("OK"); // Trả về "OK" nếu route này được truy cập
});

// Sử dụng Cache để lắng nghe các request và chạy router API
Cache.listen(API.run);
