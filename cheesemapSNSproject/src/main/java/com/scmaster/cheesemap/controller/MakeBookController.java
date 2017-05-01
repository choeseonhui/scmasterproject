package com.scmaster.cheesemap.controller;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpSession;

import org.apache.commons.codec.binary.Base64;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.BoardDAO;
import com.scmaster.cheesemap.dao.MakeBookDAO;
import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.vo.BestLike;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.Timeline;

@Controller
public class MakeBookController {

	@Autowired
	private MakeBookDAO makeBookDAO;

	@Autowired
	private TimelineDAO timelineDAO;
	
	@Autowired
	private BoardDAO boardDAO;
	
	@ResponseBody
	@RequestMapping(value="pdf", method=RequestMethod.POST)
	public String pdf(String pdf, String userid){
		byte[] pdfFile = Base64.decodeBase64(pdf);
		String folder = "C:/userUpload/";
		String filename = userid + ".pdf";
		File newPdf = new File(folder + filename);
		String listSize = "";
		FileOutputStream fos;
		try {
			fos = new FileOutputStream(newPdf);
			fos.write(pdfFile);
			fos.flush();
			fos.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  try {
		        String sourceDir = folder + filename; // Pdf files are read from this folder
		        String destinationDir = folder; // converted images from pdf document are saved here

		        File sourceFile = new File(sourceDir);
		        File destinationFile = new File(destinationDir);
		        if (!destinationFile.exists()) {
		            destinationFile.mkdir();
		            System.out.println("Folder Created -> "+ destinationFile.getAbsolutePath());
		        }
		        if (sourceFile.exists()) {
		            System.out.println("Images copied to Folder: "+ destinationFile.getName());             
		            PDDocument document = PDDocument.load(sourceDir);
		            List<PDPage> list = document.getDocumentCatalog().getAllPages();
		            System.out.println("Total files to be converted -> "+ list.size());
		            listSize = Integer.toString(list.size());

		            String fileName = sourceFile.getName().replace(".pdf", "");             
		            int pageNumber = 1;
		            for (PDPage page : list) {
		                BufferedImage image = page.convertToImage();
		                File outputfile = new File(destinationDir + fileName +"_"+ pageNumber +".png");
		                System.out.println("Image Created -> "+ outputfile.getName());
		                ImageIO.write(image, "png", outputfile);
		                pageNumber++;
		            }
		            document.close();
		            System.out.println("Converted Images are saved at -> "+ destinationFile.getAbsolutePath());
		        } else {
		            System.err.println(sourceFile.getName() +" File not exists");
		        }

		    } catch (Exception e) {
		        e.printStackTrace();
		    }
		  	
		return listSize;
	}
	
	@RequestMapping(value = "preview", method = RequestMethod.GET)
	public String preview() {
		return "preview1";
	}
	
	@RequestMapping(value = "preview2", method = RequestMethod.GET)
	public String preview2(String count, Model model) {
		model.addAttribute("count", count);
		return "makebookFinal";
	}

	@RequestMapping(value = "makebook", method = RequestMethod.GET)
	public String bookmake(HttpSession session) {
		String mem_id = (String) session.getAttribute("mem_id");

		/*
		 * if(mem_id != null) { ArrayList<Board> myBoard =
		 * makeBookDAO.getMyBoard(mem_id); Gson gson = new Gson();
		 * session.setAttribute("myBoard", gson.toJson(myBoard)); return
		 * "makebook"; }
		 */

		return "makebook";
	}

	@ResponseBody
	@RequestMapping(value = "first", method = RequestMethod.GET)
	public ArrayList<Board> first(String fromDate, String toDate, HttpSession session) {
		String mem_id=(String) session.getAttribute("mem_id");
		ArrayList<Board> myBoard = makeBookDAO.getMyBoardfromDatetoDate(fromDate, toDate, mem_id);

		/*
		 * Gson gson = new Gson(); gson.toJson(myBoard);
		 */
		return myBoard;

	}

	@ResponseBody
	@RequestMapping(value = "selectedBoardList", method = RequestMethod.POST)
	public ArrayList<Timeline> selectedBoardList(String[] select_img) {
		ArrayList<Timeline> result = new ArrayList<>();
		if (select_img != null) {
			for (String boa_id : select_img) {
				Timeline temp = new Timeline();

				Board timelineBoard = timelineDAO.getBoardByDivision(boa_id);

				temp.setBoard(timelineBoard);
				temp.setBoardCommentNick(boardDAO.getBoaCommentNick(boa_id));
				temp.setBoardTag(timelineDAO.getBoardTag(boa_id));
				temp.setBoardLike(timelineDAO.getBoardLike(boa_id));
				result.add(temp);
			}
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "bestOfLike", method = RequestMethod.POST)
	public ArrayList<Member> bestOfLike(@RequestBody BestLike bLike) {
		ArrayList<Member> result = new ArrayList<>();
		if (bLike.getSelect_img() != null) {
			result = makeBookDAO.bestOfLike(bLike);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "bestOfBoard", method = RequestMethod.POST)
	public ArrayList<Timeline> bestOfBoard(String[] select_img) {
		ArrayList<Timeline> result = new ArrayList<>();
		String[] bList = makeBookDAO.bestOfBoard(select_img);
		result=selectedBoardList(bList);
		return result;
	}
}
