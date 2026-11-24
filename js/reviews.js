/*	리뷰 작성 및 리뷰 목록 */

const form = document.getElementById("reviewForm");

form.addEventListener("submit", function(event) {

    // 새로고침 방지
    event.preventDefault();

    // 입력한 정보 가져오기
    const work = {
        id: Date.now(),
        category: document.getElementById("category").value,
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        image: document.getElementById("image").value,
        summary: document.getElementById("summary").value,

        review: {
            writer: document.getElementById("writer").value,
            rating: Number(document.getElementById("rating").value),
            content: document.getElementById("content").value
        }
    };

    // 기존 작품 목록 가져오기
    const works = JSON.parse(
        localStorage.getItem("works") || "[]"
    );

    // 새 작품 추가
    works.push(work);

    // 브라우저에 저장
    localStorage.setItem("works", JSON.stringify(works));

    // 등록 완료 메시지
    document.getElementById("message").textContent =
        "작품과 리뷰가 등록되었습니다!";

    // 입력창 초기화
    form.reset();

});
