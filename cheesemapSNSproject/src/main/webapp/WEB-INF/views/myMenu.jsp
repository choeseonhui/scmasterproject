<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<h2>My menu</h2>
<hr>
<div id="profilePhoto" class="row">
	<c:choose>
		<c:when test="${mem_savefile == null }">
		<img class="img-responsive" src="./resources/img/logo.png" alt="">
		</c:when>
		<c:otherwise>
		<img class='img-responsive' src='download?mem_id=${mem_id }' height='150' width='170' alt='profile'>
		</c:otherwise>
	</c:choose>
	
</div>
<div id="myMenu1" class="row">
	<p><b>${mem_nickname }</b></p>
	<!-- Trigger/Open The Modal -->
	<p><a id="myBtn">update</a></p>
</div>
<br>

<div id="myMenu2" class="row">
</div>

<!-- write btn -->
<div id="write-button" data-flag="false">
	<img src="./resources/img/pencil.png"/>
</div>

<div id="makebook-button" data-flag="false">
	<img src="./resources/img/cart.png"/>
</div>

<input type="hidden" id="mem_id" value="${mem_id }">


