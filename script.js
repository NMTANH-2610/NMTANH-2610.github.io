const questions = [
    {
        question: "Trong MS Excel, điều nào sau đây là đúng khi nói về ô trong công thức?",
        options: ["A.Các ô phải đứng cạnh nhau trong cùng một hàng", "B.Các ô phải đứng cạnh nhau trong cùng một cột", "C. Các ô phải liền kề", "D. Có thể chọn ô bất kỳ trong bảng tính"],
        correct: 3
    },
    {
        question: "Trong MS Excel, công thức nào sau đây là biểu thị cho tham chiếu hỗn hợp?",
        options: ["A.^A^1", "B.$A#1", "C.@A@1@", "D.$A1"],
        correct: 3
    },
    {
        question: "Trong MS Excel, khi tham chiếu đến bảng tính khác, cần thực hiện điều nào sau đây?",
        options: ["A.	Dùng dấu ngoặc vuông [] và bảng tính khác phải đóng lại", "B.	Dùng dấu ! và cả hai bảng tính đều phải mở", "C.	Dùng dấu + và cả hai bảng tính đều phải mở", "D.	Dùng dấu ngoặc vuông [] và cả hai bảng tính đều phải mở"],
        correct: 3
    },
    {
        question: "Trong MS Excel, điều nào sau đây mô tả cho vùng dữ liệu?",
        options: ["A.	Tất cả đều đúng", "B.	Kích thước có thể thay đổi", "C.	Có thể đặt tên", "D.	Có thể sử dụng trong công thức"],
        correct: 0
    },
    {
        question: "Trong MS Excel, làm cách nào để xem tên của vùng dữ liệu?",
        options: ["A.	Xem trên thanh trạng thái", "B.	Xem hộp thoại tên bên cạnh thanh công thức", "C.	Có thể đặt tên", "D.	Có thể sử dụng trong công thức"],
        correct: 1
    },
    {
        question: "Trong MS Excel, điều nào sau đây là đúng khi nói về việc đặt tên vùng dữ liệu?",
        options: ["A.	Có thể đặt tên vùng trùng với tên trang tính", "B.	Có thể đặt tên vùng trùng với tên của nhiều trang tính", "C.	Tên vùng không được chứa toán tử", "D.	Tên vùng nằm tại thanh công thức"],
        correct: 2
    },
    {
        question: "Trong MS Excel, cú pháp nào sau đây dùng để thêm vùng dữ liệu có tên SALES vào công thức?",
        options: ["A.	&(SALE)", "B.	SALE ", "C.	SUM(SALES)", "D.	TOTAL#(SALES)"],
        correct: 2
    },
    {
        question: "Trong MS Excel, cú pháp nào sau đây dùng để nhân tất cả các ô trong vùng dữ liệu có tên DATA?",
        options: ["A.	PRODUCT(DATA)", "B.	DATA", "C.	x(DATA)", "D.	Multiply(DATA)"],
        correct: 0
    },
    {
        question: "Tab nào trong Excel cung cấp quyền truy cập vào thư viện công thức và hàm số?",
        options: ["A.	File", "B.	View", "C.	Formulas", "D.	Page layout"],
        correct: 2
    },
    {
        question: "Trong MS Excel, đáp án nào dưới đây định nghĩa về công thức được lập trình sẵn để thực hiện một phép tính?",
        options: ["A.	Địa chỉ tham chiếu", "B.	Dấu ngoặc đơn", "C.	Toán từ", "D.	Hàm"],
        correct: 3
    },
    {
        question: "Trong MS Excel, chức năng Function Library trong tab Formulas sắp xếp các hàm theo __________?",
        options: ["A.	Kích cỡ", "B.	Màu sắc", "C.	Vị trí ", "D.	Thể loại"],
        correct: 3
    },
    {
        question: "Trong MS Excel, nếu muốn tính toán khoản lãi suất phải trả cho việc vay thế chấp, bạn sẽ sử dụng hàm nào trong danh mục Financial trên thanh công thức?",
        options: ["A.	Date & time ", "B.	Financial ", "C.	Text ", "D.	Logical "],
        correct: 1
    },
    {
        question: "Trong MS Excel, phần nào trong một công thức có nhiều đối số cụ thể và trả về một giá trị duy nhất dựa vào những đối số?",
        options: ["A.	Hàm", "B.	Vùng", "C.	Ô dữ liệu", "D.	Trang tính"],
        correct: 0
    },
    {
        question: "Trong MS Excel, vị trí của phím Insert Function nằm ở đâu?",
        options: ["A.	Tab Formulas", "B.	Tab View", "C.	Data tab", "D.	Review tab"],
        correct: 0
    },
    {
        question: "Trong MS Excel, hàm nào dưới đây đưa ra giá trị nhỏ nhất trong danh sách các đối số?",
        options: ["A.	MAX", "B.	AVERAGE", "C.	SUM", "D.	MIN"],
        correct: 3
    },
    {
        question: "Trong MS Excel, để xác định điểm kết thúc của một hàm không có đối số, ký tự nào dưới đây vẫn phải được sử dụng?",
        options: ["A.	Dấu chấm câu", "B.	Dấu ngoặc kép", "C.	Dấu ngoặc đơn", "D.	Dấu phẩy"],
        correct: 2
    },
    {
        question: "Trong MS Excel, nếu bạn đã sắp xếp danh sách nhân viên theo từng bộ phận và muốn tính tổng tiền lương theo từng bộ phận, hàm nào phù hợp nhất để sử dụng?",
        options: ["A.	TOTAL", "B.	SUM", "C.	SUBTOTAL", "D.	MAX"],
        correct: 2
    },
    {
        question: "Trong MS Excel, giá trị được trả về bởi hàm nào sẽ tự động cập nhật thay đổi khi trang tính thay đổi?",
        options: ["A.	TODAY", "B.	INSERT", "C.	NOW", "D.	UPDATE"],
        correct: 0
    },
    {
        question: "Trong MS Excel, hàm nào có chức năng mặc định tính tổng các ô dữ liệu liền kề với ô đầu tiên không phải là số và có chứa hàm SUM trong công thức của nó?",
        options: ["A.	AutoSum", "B.	SUM", "C.	SUMIF", "D.	SUMSQ"],
        correct: 0
    },
    {
        question: "Trong MS Excel, hàm COUNT thuộc loại hàm nào?",
        options: ["A.	Hàm văn bản", "B.	Hàm luận lý", "C.	Hàm thống kê", "D.	Hàm cơ bản"],
        correct: 2
    },
    {
        question: "Trong MS Excel, ký tự nào dưới đây bao quanh các đối số trong một hàm?",
        options: ["A.	dấu phẩy", "B.	dấu ngoặc đơn", "C.	dấu ngoặc vuông", "D.	dấu hoa thị"],
        correct: 1
    },
    {
        question: "Trong MS Excel, hàm nào dưới đây đếm số lượng các ô trong vùng chọn có chứa dữ liệu, bao gồm số, ngày tháng, công thức hoặc nhãn văn bản?",
        options: ["A.	COUNTA", "B.	Auto sum", "C.	sum", "D.	total"],
        correct: 0
    },
    {
        question: "Trong MS Excel, hàm nào dưới đây được sử dụng để đếm số lượng ô trong vùng chọn chỉ chứa số, không chứa văn bản?",
        options: ["A.	auto sum", "B.	COUNTA", "C.	total", "D.	COUNT"],
        correct: 3
    },
    {
        question: "Trong MS Excel, tỷ lệ được sử dụng trong hàm PMT đại diện cho đại lượng nào dưới đây?",
        options: ["A.	giá trị đầu tư hiện tại", "B.	tỷ lệ lãi suất cho vay hàng năm", "C.	giá trị của khoản đầu tư tại thời điểm cuối kỳ đầu tư", "D.	tổng các khoản thanh toán"],
        correct: 1
    },
    {
        question: "Trong MS Excel, bạn có nhiệm vụ theo dõi việc kiểm kê hàng hóa của năm thành phố và tính tổng các chi phí cho từng thành phố. Bạn sẽ sử dụng hàm nào dưới đây để tính toán cho nhiệm vụ này?",
        options: ["A.	Min", "B.	Total", "C.	Subtotal", "D.	Max"],
        correct: 2
    },
    {
        question: "Trong MS Excel, bạn cần cộng giá trị ở các ô B7, B30 và B35. Hàm nào sẽ được bạn sử dụng để cộng các giá trị ở các ô không liền kề nhau?",
        options: ["A.	Auto sum", "B.	SUMIF", "C.	SUM", "D.	SUMIFS"],
        correct: 2
    },
    {
        question: "Trong MS Excel, bạn sử dụng công cụ nào dưới đây để thể hiện mối quan hệ giữa công thức và ô tham chiếu của nó?",
        options: ["A.	mũi tên theo dõi tiền lệ", "B.	tên ô dữ liệu", "C.	dấu", "D.	ô dữ liệu trống"],
        correct: 0
    },
    {
        question: "Trong MS Excel, tab nào chứa chức năng theo dõi các ô tiền lệ?",
        options: ["A.	home", "B.	Formulas", "C.	Data", "D.	Page layout"],
        correct: 1
    },
    {
        question: ": Trong MS Excel, tổ hợp phím nào được sử dụng để hiển thị hoặc ẩn công thức trong một trang tính?",
        options: ["A.	Ctrl +  dấu huyền", "B.	Ctrl + Dấu phẩy", "C.	Ctrl + dấu chấm câu", "D.	Ctrl + Dấu gạch ngang"],
        correct: 0
    },
    {
        question: "Trong MS Excel, trang tính của bạn có một cột được thiết kế để theo dõi các dự án đã hoàn thành và bạn muốn đếm số lượng dự án đã hoàn thành. Bạn sẽ sử dụng hàm nào dưới đây để đếm các ô chứa dữ liệu cần tìm?",
        options: ["A.	Count", "B.	Countif", "C.	Counta", "D.	Decout"],
        correct: 2
    },
    {
        question: "Trong MS Excel, khi tạo hóa đơn thanh toán cho khách hàng trong vòng ba mươi ngày, bạn muốn ngăn chặn việc tự động cập nhật sửa đổi. Bạn có thể sử dụng hàm nào dưới đây?",
        options: ["A.	TODAY", "B.	Year", "C.	Day", "D.	Days360"],
        correct: 0
    },
    {
        question: ": Trong MS Excel, khi bạn chèn một ô vào cột dọc, các ô trong cùng cột sẽ dịch chuyển:",
        options: ["A.	qua phải", "B.	qua trái", "C.	xuống dưới", "D.	Lên trên"],
        correct: 1
    },
    {
        question: "Trong MS Excel, khi bạn chèn một ô vào hàng ngang, các ô trong cùng hàng sẽ dịch chuyển:",
        options: ["A.	qua phải", "B.	qua trái", "C.	xuống dưới", "D.	Lên trên"],
        correct: 0
    },
    {
        question: "Trong MS Excel, điều gì xảy ra khi nhấp chuột phải lên một ô?",
        options: ["A.	Một ô bị xóa", "B.	Một ô được chèn", "C.	Ô bị dịch chuyển", "D.	Danh sách lốt tắt hiên thị"],
        correct: 3
    },
    {
        question: "Trong MS Excel, thao tác nào dưới đây có nghĩa là sắp xếp và sắp hàng các ô ngay thẳng với nhau?",
        options: ["A.	Canh dòng", "B.	Làm phẳng", "C.	Làm thẳng", "D.	Sắp xếp"],
        correct: 0
    },
    {
        question: "Trong MS Excel, tại vị trí nào bạn có thể truy cập vào lệnh Alignment?",
        options: ["A.	hộp thoại Format Cells", "B.	tab Data", "C.	Tab view", "D.	Tab review"],
        correct: 0
    },
    {
        question: "Trong MS Excel, khi bạn nhập số, vị trí mặc định là:",
        options: ["A.	canh dòng bên phải ", "B.	canh dòng bên  trái", "C.	ở ngay trung tâm", "D.	canh đều"],
        correct: 0
    },
    {
        question: "Trong MS Excel, lệnh nào dùng để căn chỉnh văn bản giữa các ô?",
        options: ["A.	Top", "C.	Center", "B.	Bottom", "D.	Justify"],
        correct: 3
    },
    {
        question: ": Trong MS Excel, lệnh nào dùng để căn chỉnh văn bản từ trên xuống dưới trong một ô?",
        options: ["A.	distributed", "B.	Center", "C.	Justify", "D.	Top"],
        correct: 0
    },
    {
        question: "Trên tab Home trong nhóm lệnh căn chỉnh, nút nào được sử dụng để di chuyển văn bản sang phải?",
        options: ["A.	top align", "B.	bottom align", "C.	Increase Indent", "D.	Decrease indent"],
        correct: 2
    },
    {
        question: "Trong MS Excel, tổ hợp phím nào được dùng để tăng khoảng cách thụt đầu các dòng?",
        options: ["A.	Ctrl + H +4", "B.	Alt + H + 6", "C.	Ctrl + H +6", "D.	Shift + H +4"],
        correct: 2
    },
    {
        question: "Trong MS Excel, bạn chọn mục nào trên tab File để thay đổi font chữ mặc định dùng trong tất cả các bảng tính?",
        options: ["A.	Info", "B.	Save", "C.	Share", "D.	Options"],
        correct: 3
    },
    {
        question: "Trong MS Excel, thanh công cụ nào là công cụ định dạng, được hiển thị trên hoặc dưới danh sách tắt khi bạn nhấp chuột phải vào một ô?",
        options: ["A.	Mini ", "B.	Top", "C.	New (Mới)", "D.	Fast"],
        correct: 0
    },
    {
        question: "Trong MS Excel, để làm nổi bật hoặc tạo nền màu cho các ô trong một trang tính, bạn sẽ chọn công cụ nào?",
        options: ["A.	Bold (Đậm)", "B.	Font Color (Màu chữ)", "C.	Fill Color (Tô màu)", "D.	Font"],
        correct: 2
    },
    {
        question: "Trong MS Excel, nhóm công cụ nào trên tab Home giúp định dạng số cho các ô được chọn?",
        options: ["A.	Clipboard (Bảng kẹp)", "B.	Font (Phông chữ)", "C.	Alignment", "D.	Number (Số)"],
        correct: 3
    },
    {
        question: "Trong MS Excel, định dạng số nào sau đây hiển thị mặc định với ký hiệu tiền tệ và có hai chữ số thập phân?",
        options: ["A.	Number (Số)", "B.	Percentage (Phần trăm)", "C.	Accounting (Kế toán)", "D.	Currency (Tiền tệ)"],
        correct: 3
    },
    {
        question: "Trong MS Excel, các định dạng số nào sau đây có sẵn trong danh sách Number Format?",
        options: ["A.	Tất cả đúng", "B.	General (Tổng quan)", "C.	Accounting (Kế toán)", "D.	Fraction (Phân số)"],
        correct: 0
    },
    {
        question: "Trong MS Excel, con trỏ chuột sẽ trông như thế nào khi Format Painter đang hoạt động?",
        options: ["A.	Dấu cộng màu trắng", "B.	Dấu cộng màu trắng và cây chổi sơn", "C.	Chỉ có cây chổi sơn", "D.	Dấu cộng màu đen và cây chổi sơn"],
        correct: 1
    },
    {
        question: "Để cung cấp các tùy chọn đặc biệt khi dán các ô, Excel sẽ hiển thị nút tùy chọn Paste trên trang tính. Đúng không?",
        options: ["A.	Paste (Dán)", "B.	Copy (Sao chép)", "C.	Cut (Cắt)", "D.	Insert (Chèn)"],
        correct: 0
    },
    {
        question: "Trong MS Excel, để tăng cường thao tác với trang tính, có thể sử dụng tập hợp các cài đặt sẵn của ô nào sau đây?",
        options: ["A.	Công thức", "B.	Kiểu", "C.	Ngày tháng năm ", "D.	Ký hiệu"],
        correct: 1
    },
    {
        question: "Trong MS Excel, câu nào là đúng khi áp dụng kiểu định dạng cho các ô khác nhau trong trang tính?",
        options: ["A.	Một bảng tính chỉ có thể có một kiểu duy nhất", "B.	Có thể kết hợp các kiểu định dạng khác nhau theo ý muốn", "C.	Chỉ có thể kết hợp tối đa hai kiểu định dạng", "D.	Không thể sử dụng lệnh Undo để đổi kiểu định dạng"],
        correct: 1
    },
    {
        question: ": Trong MS Excel, để tạo kiểu định dạng riêng, bạn mở danh sách Cell Styles và chọn tùy chọn nào sau đây?",
        options: ["A.	New Cell Style (Kiểu ô mới)", "B.	My Cell Style (Phong cách ô của tôi)", "C.	Custom Cell Style (Kiểu ô tùy chỉnh)", "D.	Rename Cell Style (Đổi tên kiểu ô)"],
        correct: 0
    },
    {
        question: "Trong MS Excel, lệnh nào trên danh sách tắt có thể được sử dụng để xóa một siêu liên kết từ ô đã chọn?",
        options: ["A.	Undo hyperlink", "B.	Earse hyperlink", "C.	Remove Hyperlink", "D.	Delete Hyperlink"],
        correct: 2
    },
    {
        question: "Trong MS Excel, định dạng dữ liệu có điều kiện nằm trong nhóm nào trên tab Home?",
        options: ["A.	Clipboard (Bảng kẹp)", "B.	Font (Phông chữ)", "C.	Styles (Phong cách)", "D.	Alignment (Căn chỉnh)"],
        correct: 2
    },
    {
        question: "Trong MS Excel, tùy chọn nào trên danh sách định dạng có điều kiện cung cấp quyền truy cập vào Conditional Formatting Rules Manager?",
        options: ["A.	Rename Rule (Đổi tên quy tắc)", "B.	Create Rule (Tạo quy tắc)", "C.	Manage Rules (Quản lý quy tắc)", "D.	Write rules"],
        correct: 2
    },
    {
        question: "Trong MS Excel, hàng tiêu đề được xác định bởi điều gì dưới đây?",
        options: ["A.	Tổ hợp phím ", "B.	Biểu tượng ", "C.	Ký tự ", "D.	Số "],
        correct: 3
    },
    {
        question: "Trong MS Excel, cột tiêu đề được xác định bởi điều gì dưới đây?",
        options: ["A.	Tổ hợp phím ", "B.	Biểu tượng ", "C.	Ký tự ", "D.	Số "],
        correct: 2
    },
    {
        question: "Trong MS Excel, để xóa một hàng, chọn hàng tiêu đề, sau đó nhấp vào mũi tên trong nhóm Cells trên tab Home và chọn lệnh nào?",
        options: ["A.	Erase", "B.	Delete", "C.	Cut", "D.	Remove	"],
        correct: 1
    },
    {
        question: "Để Excel có thể tự động điều chỉnh độ rộng của ô dữ liệu cho phù hợp với kích thước của nội dung, bạn thực hiện thao tác gì ngay tại đường ranh giới giữa hàng và cột?",
        options: ["A.	Nhấp chuột", "B.	Kéo", "C.	Nhấp chuột ba lần", "D.	Nhấp đôi chuột	"],
        correct: 3
    },
    {
        question: "Trong MS Excel, khi muốn ẩn các hàng hoặc cột không mong muốn trong trang tính, bạn có thể sử dụng tùy chọn nào từ danh sách tắt?",
        options: ["A.	Option ", "B.	Clesr", "C.	Hide", "D.	Delete	"],
        correct: 2
    },
    {
        question: "Trong MS Excel, màu nào biểu thị cho nội dung bị ẩn trong một trang tính?",
        options: ["A.	Đỏ", "B.	Xanh lá", "C.	Vàng", "D.	Xanh biển"],
        correct: 1
    },
    {
        question: "Trong MS Excel, lệnh Transpose được tìm thấy trong hộp thoại Paste Special thuộc nhóm Clipboard trên tab nào?",
        options: ["A.	Insert ", "B.	View", "C.	Review", "D.	Home"],
        correct: 3
    },
    {
        question: "Trong MS Excel Để định dạng nhanh trang tính, ta chọn bất cứ ô dữ liệu nào đang hoạt động trong trang tính và chọn một biểu mẫu đã thiết kế sẵn ở trong tab nào dưới đây?",
        options: ["A.	Page Layout", "B.	Home", "C.	Review", "D.	View"],
        correct: 0
    },
    {
        question: ": Trong MS Excel Những điều nào dưới đây là đúng khi nói về cách sử dụng các biểu mẫu đã hiệu chỉnh?",
        options: ["A.	Chúng chỉ thích hợp một lần duy nhất", "B.	Chúng chỉ thích hợp với ứng dụng mà chúng được tạo", "C.	Chúng thích hợp cho tất cả các loại tài liệu của Office 2013", "D.	Chúng chỉ thích hợp trong trang tính của Excel"],
        correct: 2
    },
    {
        question: "Trong MS Excel Sử dụng SmartArt hoặc các đồ họa tương tự. trong nhóm các biểu mẫu để nhấn mạnh nội dung của biểu đồ, hình dạng,",
        options: ["A.	Font", "B.	Currency", "C.	Symbols ", "D.	Effects"],
        correct: 3
    },
    {
        question: "Trong MS Excel Để bỏ một hình ảnh nền, nhấp chuột vào chức năng Delete Background trong nhóm Page Setup thuộc tab nào dưới đây?",
        options: ["A.	Home", "B.	Insert", "C.	Page layout", "D.	Data	"],
        correct: 2
    },
    {
        question: "Trong MS Excel Nhấp chuột vào trong nhóm Sheet Option để mở hộp thoại Page Setup.",
        options: ["A.	Nút Open", "B.	Dữ liệu", "C.	Trình khởi chạy hộp thoại", "D.	Hàng	"],
        correct: 2
    },
    {
        question: "Trong MS Excel Để gõ thêm một tiêu đề đầu trang hoặc cuối trang vào trang tính, nhấp chuột vào nút Header & Footer trên tab Insert tại nhóm nào dưới đây?",
        options: ["A.	Table", "B.	Apps", "C.	Text", "D.	Reports"],
        correct: 2
    },
    {
        question: "Trong MS Excel Tab nào dưới đây dùng hiển thị thêm chức năng định dạng Header & Footer?",
        options: ["A.	Design	", "B.	Data	", "C.	Home", "D.	Review"],
        correct: 0
    },
    {
        question: "Trong MS Excel Để tiết kiệm thời gian, có thể sử dụng một trong các tiêu đề đầu trang và chân trang được định sẵn trên tab nào dưới đây?",
        options: ["A.	Data ", "B.	Home", "C.	Design ", "D.	Reviews"],
        correct: 0
    },
    {
        question: "Trong MS Excel Để nhìn thấy bao nhiêu tài liệu được in chia giữa các trang, ta chọn Page Break Preview tại tab nào dưới đây?",
        options: ["A.	View", "B.	Home", "C.	Data", "D.	Design"],
        correct: 0
    },
    {
        question: "Trong MS Excel Chức năng nào dưới đây được sử dụng để thu hẹp hoặc kéo dài tài liệu để in trên một trang duy nhất?",
        options: ["A.	Pasting", "B.	Cutting", "C.	Zooming", "D.	Scaling	"],
        correct: 0
    },
    {
        question: "Trong MS Excel Nhóm nào dưới đây trong tab Page Layout giúp thay đổi được phạm vi trang tính cần in",
        options: ["A.	Arrange", "B.	Page Setup", "C.	Sheet Options", "D.	Theme"],
        correct: 1
    },
    {
        question: "Trong MS Excel Điều gì dưới đây sẽ xảy ra với màu tab trang tính khi sao chép trang tính?",
        options: ["A.	Tab trang tính chuyển sang màu trắng", "B.	Tab trang tính chuyển sang màu xám", "C.	Tab trang tính giữ nguyên màu sắc", "D.	Tab trang tính chuyển sang không  màu"],
        correct: 2
    },
    {
        question: " Trong MS Excel Để ẩn một vài trang tính cùng lúc, đầu tiên phải muốn ẩn, sau đó nhấp chuột phải và chọn",
        options: ["A.	ấn Ctrl, hide", "B.	giữ nút tab, hide", "C.	chọn công cụ hightlight, protect sheet", "D.	ấn tổ hợp phím Ctrl + H"],
        correct: 0
    }
];

// Chọn ngẫu nhiên 30 câu hỏi từ 75 câu hỏi
function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 30);
}

// Hiển thị câu hỏi lên trang
function loadQuiz() {
    const quizContainer = document.getElementById('quiz-form');
    quizContainer.innerHTML = ''; // Xóa câu hỏi cũ
    const randomQuestions = getRandomQuestions();
    randomQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`; // Hiển thị số thứ tự câu hỏi
        
        q.options.forEach((option, i) => {
            questionElement.innerHTML += `
                <div class="options">
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        ${option}
                    </label>
                </div>
            `;
        });
        
        questionElement.innerHTML += `<div class="feedback" id="feedback${index}"></div>`; // Khu vực hiển thị kết quả
        quizContainer.appendChild(questionElement);
    });
}

// Kiểm tra câu trả lời và chấm điểm
function submitQuiz() {
    const totalQuestions = 30; // Tổng số câu hỏi
    let score = 0;
    const quizContainer = document.getElementById('quiz-form');
    const selectedAnswers = Array.from(quizContainer.querySelectorAll('input[type="radio"]:checked'));

    selectedAnswers.forEach((answer, index) => {
        const questionIndex = parseInt(answer.name.replace('question', ''));
        const feedbackElement = document.getElementById(`feedback${questionIndex}`);

        if (parseInt(answer.value) === questions[questionIndex].correct) {
            score++;
            feedbackElement.innerHTML = '<span class="correct-answer">Đáp án đúng!</span>';
        } else {
            feedbackElement.innerHTML = `<span class="wrong-answer">Sai! Đáp án đúng là: ${questions[questionIndex].options[questions[questionIndex].correct]}</span>`;
        }
    });

    const percentage = (score / totalQuestions) * 10; // Tính điểm theo thang điểm 10
    document.getElementById('result').innerHTML = `<h2>Kết quả:</h2><p>Điểm của bạn: ${percentage.toFixed(2)}</p>`;
}

// Hàm reset quiz
function resetQuiz() {
    document.getElementById('result').innerHTML = ''; // Xóa kết quả
    loadQuiz(); // Tải lại câu hỏi
}

// Gọi hàm để tải câu hỏi ngay khi trang được tải
window.onload = loadQuiz;